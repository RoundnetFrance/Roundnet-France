import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const userId = req.query.userId;

    // If user is authorized
    if (session) {
      // GET method to read specific app user
      if (req.method === "GET") {
        try {
          const user = await getDocument("users", ObjectId(userId), {
            password: 0,
            image: 0,
          });
          return res.status(200).json(user);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // PATCH method to update specific app user
      if (req.method === "PATCH") {
        const data = req.body;
        delete data._id;

        try {
          const response = await patchDocument(
            "users",
            { _id: ObjectId(userId) },
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
          const user = await deleteDocument("users", { _id: ObjectId(userId) });
          return res.status(200).json(user);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // If method is not supported
      return res.status(405).json({ error: "Method not allowed" });
    }

    // If user is not authorized
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
