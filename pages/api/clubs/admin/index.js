import { getSession } from "next-auth/react";
import { getDocuments } from "../../../../helpers/db";

export default async function handler(req, res) {
  const session = await getSession({ req });

  // If user is authorized
  if (session) {

    // GET method to read federation members (including non-validated ones)
    if (req.method === 'GET') {
      try {
        const clubs = await getDocuments('clubs');
        return res.status(200).json(clubs);
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error', details: error.message });
      }
    }

    return res.status(405).json({ error: 'Method not allowed' });
  }

  // If user is not authorized
  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
