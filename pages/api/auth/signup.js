import { connectToDatabase } from "../../../lib/mongodb";
import { hash } from 'bcryptjs';
import validateEmail from "../../../helpers/validate-email";

export default async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const { email, password } = req.body;
        
        //Validate
        const emailIsValid = validateEmail(email);
        if (!email || !emailIsValid) {
            res.status(422).json({ email: true, message: 'L\'email n\'est pas valide' });
            return;
        }

        if (!password || password.length < 6) {
            res.status(422).json({ password: true, message: 'Le mot de passe n\'est pas valide' });
            return;
        }

        //Connect with database
        const { db, client } = connectToDatabase();
        //Check existing
        const userExists = await db
            .collection('users')
            .findOne({ email });
        //Send error response if duplicate user is found
        if (userExists) {
            res.status(422).json({ message: 'User already exists' });
            client.close();
            return;
        }
        //Hash password
        const status = await db.collection('users').insertOne({
            email,
            password: await hash(password, 12),
        });
        //Send success response
        res.status(201).json({ message: 'User created', ...status });
        //Close DB connection
        client.close();
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }
}
