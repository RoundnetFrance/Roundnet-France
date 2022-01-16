import { getSession } from "next-auth/react";
import { getDocument, patchDocument } from "../../../helpers/db";

export default async function handler(req, res) {

  const session = await getSession({ req })

  // If user is authorized
  if (session) {

    // GET method to read app members
    if (req.method === 'GET') {
      try {
        const users = await getDocument('users', { email: session.user.email }, { password: 0, image: 0 });
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
    }

    // PATCH method to update app members
    if (req.method === 'PATCH') {
      console.log(req.body)
      try {
        const user = await patchDocument('users', { email: session.user.email }, req.body);
        return res.status(200).json(user);
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Erreur serveur', message: error.message });
      }
    }

    // If method is not supported
    return res.status(405).json({ error: 'Method not allowed' });

  }

  // If user is not authorized
  res.send({
    error: "You must be logged to view the protected content on this page.",
  })
}