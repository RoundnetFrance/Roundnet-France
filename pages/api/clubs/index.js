// NEXT API REQUEST
// GET /api/clubs

import { getDocuments } from '../../../helpers/db';

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
  return res.status(405).json({ error: 'Method not allowed' });
}
