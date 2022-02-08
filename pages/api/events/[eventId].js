import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const eventId = req.query.eventId;

  // GET method to read specific app user
  if (req.method === "GET") {
    try {
      const user = await getDocument("events", ObjectId(eventId));
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  // If user is authorized
  if (session) {
    // PATCH method to update specific app user
    if (req.method === "PATCH") {
      // Store req.body into a variable without _id
      const data = { ...req.body };
      delete data._id;
      console.log(data);

      try {
        const response = await patchDocument(
          "events",
          { _id: ObjectId(eventId) },
          data
        );
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // DEL method to delete specific app user
    if (req.method === "DELETE") {
      try {
        const response = await deleteDocument("events", {
          _id: ObjectId(eventId),
        });
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // If method is not supported
    return res.status(405).json({ error: "Method not allowed" });
  }

  // If user is not authorized
  return res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
