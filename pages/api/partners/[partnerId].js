import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const partnerId = req.query.partnerId;

  // If partner is authorized
  if (session) {
    // GET method to read specific app partner
    if (req.method === "GET") {
      try {
        const partner = await getDocument("partners", ObjectId(partnerId));
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
        const response = await patchDocument(
          "partners",
          { _id: ObjectId(partnerId) },
          data
        );
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // DEL method to delete specific app partner
    if (req.method === "DELETE") {
      try {
        const partner = await deleteDocument("partners", {
          _id: ObjectId(partnerId),
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
