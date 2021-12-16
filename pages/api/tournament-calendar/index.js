// NEXT API REQUEST
// GET /api/v1/tournament-calendar

const { connectToDatabase } = require('../../../lib/mongodb');

export default async function handler(req, res) {
  // GET method to read federation members
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const tournamentCalendar = await db.collection('calendar').find({}).toArray();
      return res.status(200).json(tournamentCalendar);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });


}
