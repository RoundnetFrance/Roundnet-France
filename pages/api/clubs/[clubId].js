import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";
import storage from "../../../lib/init-firebase";
import { ref, deleteObject } from "firebase/storage";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const clubId = req.query.clubId;

  // If user is authorized
  if (session) {
    // GET method to read specific app user
    if (req.method === "GET") {
      try {
        const user = await getDocument("clubs", ObjectId(clubId));
        return res.status(200).json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // PATCH method to update specific app user
    if (req.method === "PATCH") {
      // Store req.body into a variable without _id
      const data = { ...req.body };
      delete data._id;

      try {
        const response = await patchDocument(
          "clubs",
          { _id: ObjectId(clubId) },
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
      // Delete from storage
      let fileRef;
      try {
        const document = await getDocument("clubs", ObjectId(clubId), {
          image: 1,
          _id: 0,
        });
        fileRef = ref(storage, document.image);
        await deleteObject(fileRef);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await deleteDocument("clubs", {
          _id: ObjectId(clubId),
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
  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
