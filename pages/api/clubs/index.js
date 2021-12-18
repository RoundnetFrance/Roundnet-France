// NEXT API REQUEST
// GET /api/v1/clubs

import { getClubs } from '../../../helpers/db/clubs';

export default async function handler(req, res) {
  // GET method to read federation members
  if (req.method === 'GET') {
    try {
      const clubs = await getClubs();
      return res.status(200).json(clubs);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
