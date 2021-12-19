import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { getDocument, patchDocument, deleteDocument } from "../../../../helpers/db";

export default async function handler(req, res) {

  const session = await getSession({ req })
  const clubId = req.query.clubId;

  // If user is authorized
  if (session) {

    // GET method to read specific app user
    if (req.method === 'GET') {
      try {
        const user = await getDocument('clubs', ObjectId(clubId));
        return res.status(200).json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // PATCH method to update specific app user
    if (req.method === 'PATCH') {
      try {
        const response = await patchDocument('clubs', { _id: ObjectId(clubId) }, req.body);
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }


    // DEL method to delete specific app user
    if (req.method === 'DELETE') {
      try {
        const user = await deleteDocument('clubs', { _id: ObjectId(clubId) });
        console.log(user);
        return res.status(200).json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
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