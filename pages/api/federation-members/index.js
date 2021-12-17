// NEXT API REQUEST
// GET /api/v1/federation-members

import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  // GET method to read federation members
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const federationMembers = await db.collection('federation-members').find({}).toArray();
      return res.status(200).json(federationMembers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });


}
