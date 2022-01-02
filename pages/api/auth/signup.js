import { getDocument, insertDocument } from "../../../helpers/db";
import { hash } from 'bcryptjs';
import { validateAPI } from '../../../helpers/form';
import Joi from 'joi';


export default async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        // //Getting email and password from body
        // const { name, email, password, passwordConfirm } = req.body;

        // //Validate
        // const emailIsValid = validateEmail(email);
        // if (!email || !emailIsValid) {
        //     res.status(422).json({ input: 'email', message: 'L\'email n\'est pas valide' });
        //     return;
        // }

        // if (!name || name.trim() === '') {
        //     res.status(422).json({ input: 'name', message: 'Le nom est requis' });
        //     return;
        // }

        // if (!password || password.length < 6) {
        //     res.status(422).json({ input: 'password', message: 'Le mot de passe n\'est pas valide. Il doit faire plus de 6 caractères.' });
        //     return;
        // }

        // if (password !== passwordConfirm) {
        //     res.status(422).json({ input: 'passwordConfirm', message: 'Les mots de passe ne correspondent pas' });
        // }

        const { data } = req.body;

        // * Validate the data
        try {

            // Define the POST CLUB schema
            const schema = Joi.object({
                name: Joi.string().trim().required(),
                email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
                password: Joi.string().min(6).required(),
                passwordConfirm: Joi.any().valid(Joi.ref('password')).required(),
            });

            // Actual validation
            validateAPI({ data, schema });

        } catch (error) {
            console.error('ERROR 400 - users', error.message);
            return res.status(400).json({ message: error.message });
        }

        // * Send the validated data to the database
        try {
            //Check existing
            const userExists = await getDocument('users', { email: data.email });
            //Send error response if duplicate user is found
            if (userExists) {
                res.status(403).json({ message: 'User already exists' });
                return;
            }

            // Hash password & remove passwordConfirm
            data.password = await hash(data.password, 12);
            delete data.passwordConfirm;

            // Add authorized:false && image:'' properties to the data.
            data.authorized = false;
            data.image = '';

            // Insert user
            await insertDocument('users', data);

            //Send success response
            res.status(201).json({ message: 'Le compte a bien été créé. Vous serez notifié par email lorsqu\'il sera validé par la fédération.' });

        } catch (error) {
            console.error('ERROR 500, users : ', error.message);
            return res.status(500).json({ error: 'Une erreur est survenue lors de la création du club dans la base de données. Veuillez réessayer.', details: error.message });
        }

    } else {
        //Response for other than POST method
        res.status(405).json({ message: 'Method not allowed' });
    }
}
