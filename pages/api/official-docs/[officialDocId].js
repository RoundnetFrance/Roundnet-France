import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  patchDocument,
  deleteDocument,
  getDocument,
} from "../../../helpers/db";
// import getSchema from '../../../helpers/schemas';
// import { validateAPI } from '../../../helpers/form';
import storage from "../../../lib/init-firebase";
import { ref, deleteObject } from "firebase/storage";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    const officialDocId = req.query.officialDocId;

    // If user is authorized
    if (session) {
      // GET method to read specific app official doc
      if (req.method === "GET") {
        try {
          const officialDoc = await getDocument(
            "official-docs",
            ObjectId(officialDocId)
          );
          return res.status(200).json(officialDoc);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // PATCH method to update specific doc
      if (req.method === "PATCH") {
        const data = req.body;
        delete data._id;
        try {
          const response = await patchDocument(
            "official-docs",
            { _id: ObjectId(officialDocId) },
            data
          );
          return res.status(200).json(response);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // DEL method to delete specific doc
      if (req.method === "DELETE") {
        // Delete from storage
        let fileRef;
        try {
          const document = await getDocument(
            "official-docs",
            ObjectId(officialDocId),
            { url: 1 },
            { _id: -1 }
          );
          fileRef = ref(storage, document.url);
          await deleteObject(fileRef);
        } catch (error) {
          console.error(error);
        }

        // Delete from mongoDB
        try {
          const officialDoc = await deleteDocument("official-docs", {
            _id: ObjectId(officialDocId),
          });
          return res.status(200).json(officialDoc);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // If method is not supported
      return res.status(405).json({ error: "Method not allowed" });
    }

    // If user is not authorized
    res.status(403).json({
      error: "You must be sign in to view the protected content on this page.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
