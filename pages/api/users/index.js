import { getSession } from "next-auth/react";
import { getUsers } from "../../../helpers/db/users";

export default async function handler(req, res) {

  const session = await getSession({ req })

  // If user is authorized
  if (session) {

    // GET method to read federation members
    if (req.method === 'GET') {
      try {
        const upcomingEvents = await getUsers({}, { password: 0, image: 0 });
        return res.status(200).json(upcomingEvents);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }

    // If method is not supported
    return res.status(405).json({ error: 'Method not allowed' });

  }

  // If user is not authorized
  res.send({
    error: "You must be sign in to view the protected content on this page.",
  })
}