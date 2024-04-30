import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";
import storage from "../../../lib/init-firebase";
import { ref, deleteObject, type StorageReference } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Club } from "../../../models/collections/Clubs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const clubId = req.query.clubId;

    if (!clubId) {
      throw new Error("No clubId provided");
    }

    // If user is authorized
    if (session) {
      // GET method to read specific app user
      if (req.method === "GET") {
        try {
          const user = await getDocument<Club>({
            collection: "clubs",
            // @ts-ignore
            params: { _id: new ObjectId(clubId.toString()) },
          });
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
          const response = await patchDocument<Club>({
            collection: "clubs",
            // @ts-ignore
            params: { _id: new ObjectId(clubId.toString()) },
            document: data,
          });
          return res.status(200).json(response);
        } catch (error) {
          console.error(error);
          return res.status(500).json(error);
        }
      }

      // DEL method to delete specific app user
      if (req.method === "DELETE") {
        // Delete from storage
        let fileRef: StorageReference;
        try {
          const document = await getDocument<Club>({
            collection: "clubs",
            // @ts-ignore
            params: { _id: new ObjectId(clubId.toString()) },
            fields: { image: 1, _id: 0 },
          });
          fileRef = ref(storage, document.image);
          await deleteObject(fileRef);
        } catch (error) {
          console.error(error);
        }

        try {
          const response = await deleteDocument({
            collection: "clubs",
            params: { _id: new ObjectId(clubId?.toString()) },
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
  } catch (err) {
    console.log("err in clubId", err.message);
    res.status(500).json({ error: err.message });
  }
}
