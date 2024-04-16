import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import {
  patchDocument,
  deleteDocument,
  getDocument,
} from "../../../helpers/db";
import storage from "../../../lib/init-firebase";
import { ref, deleteObject, type StorageReference } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import type { OfficialDocument } from "../../../models/collections/OfficialDocs";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const officialDocId = req.query.officialDocId;

    if (!officialDocId) {
      throw new Error("No officialDocId provided");
    }

    // If user is authorized
    if (session) {
      // GET method to read specific app official doc
      if (req.method === "GET") {
        try {
          const officialDoc = await getDocument<OfficialDocument>({
            collection: "official-docs",
            // @ts-ignore
            params: { _id: new ObjectId(officialDocId.toString()) },
          });
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
          const response = await patchDocument<OfficialDocument>({
            collection: "official-docs",
            // @ts-ignore
            params: { _id: new ObjectId(officialDocId.toString()) },
            document: data,
          });
          return res.status(200).json(response);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // DEL method to delete specific doc
      if (req.method === "DELETE") {
        // Delete from storage
        let fileRef: StorageReference;
        try {
          const document = await getDocument<OfficialDocument>({
            collection: "official-docs",
            params: {
              // @ts-ignore
              _id: new ObjectId(officialDocId.toString()),
            },
            fields: { url: 1 },
            sort: { _id: -1 },
          });
          fileRef = ref(storage, document.url);
          await deleteObject(fileRef);
        } catch (error) {
          console.error(error);
        }

        // Delete from mongoDB
        try {
          const officialDoc = await deleteDocument({
            collection: "official-docs",
            params: { _id: new ObjectId(officialDocId.toString()) },
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
