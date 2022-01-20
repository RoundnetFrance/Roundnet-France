import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { patchDocument, deleteDocument } from "../../../helpers/db";

export default async function handler(req, res) {

  const session = await getSession({ req })
  const eventId = req.query.eventId;

  // If user is authorized
  if (session) {

    // PATCH method to update specific app user
    if (req.method === 'PATCH') {
      try {
        const response = await patchDocument('calendar', { _id: ObjectId(eventId) }, req.body);
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // DEL method to delete specific app user
    if (req.method === 'DELETE') {
      try {
        const calendar = await deleteDocument('calendar', { _id: ObjectId(eventId) });
        return res.status(200).json(calendar);
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