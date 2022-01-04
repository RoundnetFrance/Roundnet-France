// NEXT API REQUEST
// GET /api/clubs

import { getDocuments, insertDocument } from '../../../helpers/db';
import { validateAPI } from '../../../helpers/form';
import Joi from 'joi';

export default async function handler(req, res) {
  // GET method to read validated clubs (for public access)
  if (req.method === 'GET') {
    try {
      const clubs = await getDocuments('clubs', { validated: true });
      return res.status(200).json(clubs);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }

  // POST method to create a new club
  if (req.method === 'POST') {
    const { data } = req.body;

    // * Validate the data
    try {

      // Define the POST CLUB schema
      const schema = Joi.object({
        image: Joi.string().uri().required(),
        title: Joi.string().trim().required(),
        chip: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        clubCreated: Joi.date().allow(''),
        president: Joi.string().trim().required(),
        email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
        links: Joi.array().items(Joi.object({
          source: Joi.string().trim().required(),
          url: Joi.string().trim().uri().allow(''),
        })),
      });

      // Actual validation
      validateAPI({ data, schema });

    } catch (error) {
      console.error('ERROR 400 - clubs', error.message);
      return res.status(400).json({ message: error.message });
    }

    // * Send the validated data to the database
    try {
      // Check if the club title alreay exists
      const club = await getDocuments('clubs', { title: data.title });
      if (club.length > 0) {
        return res.status(400).json({ message: 'Ce nom de club existe déjà. Veuillez en indiquer un nouveau.' });
      }

      // Add a validated:false property to the data
      data.validated = false;

      await insertDocument('clubs', data);

      return res.status(201).json({ message: 'Le club a bien été enregistré. Il sera validé par un membre de la fédération.' });

    } catch (error) {
      console.error('ERROR 500, clubs', error.message);
      return res.status(500).json({ error: 'Une erreur est survenue lors de la création du club dans la base de données. Veuillez réessayer.', details: error.message });
    }
  }


  return res.status(405).json({ error: 'Method not allowed' });
}
