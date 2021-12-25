// NEXT API REQUEST
// GET /api/clubs

import { getDocuments, insertDocument } from '../../../helpers/db';
import { validateForm } from '../../../helpers/form';

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

    const { data, formBuilder } = req.body;

    // * Validate the data
    // Validate when submitted directly through API POST request
    if (!formBuilder) {
      try {
        console.log('Create a specific function to validate from API (with schema, without fields)');
      }
      catch (error) {
        // Return an error message concerning invalid data values
        return res.status(400).json({ error: error.message || 'Invalid data' });
      }
    }
    // Validate when the form is submitted from the client
    else {
      try {
        // Add links if any
        const links = [];
        if (data.facebook) {
          links.push({
            name: 'facebook',
            url: data.facebook,
          });
        }
        if (data.instagram) {
          links.push({
            name: 'instagram',
            url: data.instagram,
          });
        }
        if (data.website) {
          links.push({
            name: 'website',
            url: data.website,
          });
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // Send the data to the database
  try {


    // Creating the club data object
    const newClub = {
      title: data.organization || data.title,
      chip: data.city || data.chip,
      description: data.description,
      links: links.length > 0 ? links : data.links,
      president: data.name || data.president,
      validated: false,
    }

    const response = await insertDocument('clubs', newClub);
    console.log(response);

    // return res.status(201).json({ message: 'Le club a bien été enregistré. Il sera validé par un membre de la fédération.' });

  } catch (error) {
    return res.status(500).json({ error: 'Une erreur est survenue lors de la création du club dans la base de données. Veuillez réessayer.', details: error.message });
  }
}


return res.status(405).json({ error: 'Method not allowed' });
}
