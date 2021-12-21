// NEXT API REQUEST
// GET /api/v1/federation-members

import { getDocuments } from "../../../helpers/db";

export default async function handler(req, res) {
  // GET method to read federation members
  if (req.method === 'GET') {
    try {
      const federationMembers = await getDocuments('federation-members');
      return res.status(200).json(federationMembers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
