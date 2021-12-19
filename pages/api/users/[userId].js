import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { getUsers, deleteUser } from "../../../helpers/db/users";

export default async function handler(req, res) {

  const session = await getSession({ req })
  const userId = req.query.userId;

  // If user is authorized
  if (session) {

    // GET method to read specific app user
    if (req.method === 'GET') {
      try {
        const user = await getUsers(ObjectId(userId), { password: 0, image: 0 });
        return res.status(200).json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }

    // DEL method to delete specific app user
    if (req.method === 'DELETE') {
      try {
        const user = await deleteUser({ _id: ObjectId(userId) });
        console.log(user);
        return res.status(200).json(user);
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