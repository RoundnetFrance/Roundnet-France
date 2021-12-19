import { getUser, insertUser } from "../../../helpers/db/users";
import { hash } from 'bcryptjs';
import validateEmail from "../../../helpers/validate-email";

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

        if (!password || password.length < 6) {
            res.status(422).json({ input: 'password', message: 'Le mot de passe n\'est pas valide. Il doit faire plus de 6 caractères.' });
            return;
        }

        if (password !== passwordConfirm) {
            res.status(422).json({ input: 'passwordConfirm', message: 'Les mots de passe ne correspondent pas' });
        }


        //Check existing
        const userExists = await getUser({ email });
        //Send error response if duplicate user is found
        if (userExists) {
            res.status(403).json({ message: 'User already exists' });
            return;
        }

        


        //Hash password & insert user
        await insertUser({
            name,
            email,
            authorized: false,
            image: '',
            // createdAt: new Date(),
            // updatedAt: new Date(),
            password: await hash(password, 12),
        });

        //Send success response
        res.status(201).json({ message: 'Le compte a bien été créé. Vous serez notifié par email lorsqu\'il sera validé par la fédération.' });
    } else {
        //Response for other than POST method
        res.status(405).json({ message: 'Method not allowed' });
    }
}
