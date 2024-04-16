import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";
import storage from "../../../lib/init-firebase";
import { ref, deleteObject, type StorageReference } from "firebase/storage";
import { authOptions } from "../auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";
import type { FederationMember } from "../../../models/collections/FederationMembers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const federationMemberId = req.query.federationMemberId;

    if (!federationMemberId) {
      throw new Error("No fedeMember Id provided");
    }

    // If user is authorized
    if (session) {
      // Get federationMember data
      if (req.method === "GET") {
        try {
          const user = await getDocument<FederationMember>({
            collection: "federation-members",
            params: {
              _id: new ObjectId(federationMemberId.toString()).toString(),
            },
            fields: { password: 0 },
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
          const response = await patchDocument({
            collection: "federation-members",
            params: { _id: new ObjectId(federationMemberId.toString()) },
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
          const document = await getDocument<FederationMember>({
            collection: "federation-members",
            params: {
              _id: new ObjectId(federationMemberId.toString()).toString(),
            },
            fields: { image: 1, _id: 0 },
          });
          fileRef = ref(storage, document.image);
          await deleteObject(fileRef);
        } catch (error) {
          console.error(error);
        }

        // Delete from mongoDB
        let federationMember: FederationMember;
        try {
          federationMember = await deleteDocument({
            collection: "federation-members",
            params: {
              _id: new ObjectId(federationMemberId.toString()),
            },
          });
          return res.status(200).json(federationMember);
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
