import { connectToDatabase } from "../../../lib/mongodb";
import { hash } from 'bcryptjs';
import validateEmail from "../../../helpers/validate-email";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const { name, email, password, passwordConfirm } = req.body;
        
        //Validate
        const emailIsValid = validateEmail(email);
        if (!email || !emailIsValid) {
            res.status(422).json({ input: 'email', message: 'L\'email n\'est pas valide' });
            return;
        }

        if (!name || name.trim() === '') {
            res.status(422).json({ input: 'name', message: 'Le nom est requis' });
            return;
        }

        if (!password || password.length < 6) {
            res.status(422).json({ input: 'password', message: 'Le mot de passe n\'est pas valide. Il doit faire plus de 6 caractères.' });
            return;
        }

        if (password !== passwordConfirm) {
            res.status(422).json({ input: 'passwordConfirm', message: 'Les mots de passe ne correspondent pas' });
        }

        //Connect with database
        const { client, db } = await connectToDatabase();

        //Check existing
        const userExists = await db.collection('users')
            .findOne({ email });
        //Send error response if duplicate user is found
        if (userExists) {
            res.status(403).json({ message: 'User already exists' });
            return;
        }
        //Hash password
        const status = await db.collection('users').insertOne({
            name,
            email,
            authorized: false,
            image: '',
            password: await hash(password, 12),
        });
        //Send success response
        res.status(201).json({ message: 'Le compte a bien été créé. Vous serez notifié par email lorsqu\'il sera validé par la fédération.' });
        //Close DB connection
        client.close();
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }
}
