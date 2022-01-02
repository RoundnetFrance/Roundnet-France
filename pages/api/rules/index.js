import { getDocuments } from "../../../helpers/db";
import { getSession } from "next-auth/react";


export default async function handler(req, res) {

  const session = await getSession({ req })
  // GET method to read rule files
  if (req.method === 'GET') {
    try {
      const rules = await getDocuments('rules');
      return res.status(200).json(rules);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  if (session) {

    // POST method to create a new rule file (only for admins)
    if (req.method === 'POST') {

      return res.status(201).json({ message: 'Rule file created' });
    }
  }

  return res.status(401).json({ error: 'You must be authorized to create a rule file' });

}