// NEXT API REQUEST
// GET /api/clubs

import { getDocuments, insertDocument } from '../../../helpers/db';
import { validateForm } from '../../../helpers/form';
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
    console.log(data)

    // * Validate the data
    try {
      console.log('validate');
    } catch (error) {
      return res.status(400).json({ error: 'Erreur de validation des données', details: error.message });
    }

    // * Send the data to the database
    try {
      // const response = await insertDocument('clubs', newClub);
      // console.log(response);

      return res.status(201).json({ message: 'Le club a bien été enregistré. Il sera validé par un membre de la fédération.' });

    } catch (error) {
      return res.status(500).json({ error: 'Une erreur est survenue lors de la création du club dans la base de données. Veuillez réessayer.', details: error.message });
    }
  }


  return res.status(405).json({ error: 'Method not allowed' });
}
