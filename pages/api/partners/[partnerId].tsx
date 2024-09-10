import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import type { Partner } from "../../../models/collections/Partners";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  const partnerId = req.query.partnerId;

  // If partner is authorized
  if (session) {
    // GET method to read specific app partner
    if (req.method === "GET") {
      try {
        const partner = await getDocument<Partner>({
          collection: "partners",
          // @ts-ignore
          params: { _id: new ObjectId(partnerId.toString()) },
        });
        return res.status(200).json(partner);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // PATCH method to update specific app partner
    if (req.method === "PATCH") {
      const data = req.body;
      delete data._id;

      try {
        const response = await patchDocument<Partner>({
          collection: "partners",
          // @ts-ignore
          params: { _id: new ObjectId(partnerId.toString()) },
          document: data,
        });
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // DEL method to delete specific app partner
    if (req.method === "DELETE") {
      try {
        const partner = await deleteDocument<Partner>({
          collection: "partners",
          params: {
            // @ts-ignore
            _id: new ObjectId(partnerId.toString()),
          },
        });
        return res.status(200).json(partner);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // If method is not supported
    return res.status(405).json({ error: "Method not allowed" });
  }

  // If partner is not authorized
  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
