import { getSession } from "next-auth/react";
import { getDocument, patchDocument, deleteDocument } from "../../../helpers/db";
import { hash } from 'bcryptjs';

export default async function handler(req, res) {

  const session = await getSession({ req })

  // If user is authorized
  if (session) {

    // GET method to read self info
    if (req.method === 'GET') {
      try {
        const users = await getDocument('users', { email: session.user.email }, { password: 0, image: 0 });
        return res.status(200).json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message || 'Une erreur est survenue' });
      }
    }

    // PATCH method to update self info
    if (req.method === 'PATCH') {
      console.log(req.body)
      if (req.body.password) {
        req.body.password = await hash(req.body.password, 12);
        delete req.body.passwordConfirm;
      }
      try {
        const user = await patchDocument('users', { email: session.user.email }, req.body);
        return res.status(200).json(user);
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message || 'Une erreur est survenue' });
      }
    }

    // DELETE method to delete self account
    if (req.method === 'DELETE') {
      try {
        await deleteDocument('users', { email: session.user.email });
        return res.status(200).json({ message: 'Compte supprimé' });
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error', message: error.message || 'Une erreur est survenue' });
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