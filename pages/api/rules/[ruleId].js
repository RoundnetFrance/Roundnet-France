import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { getDocuments, patchDocument, deleteDocument } from "../../../helpers/db";

export default async function handler(req, res) {

  const session = await getSession({ req })
  const ruleId = req.query.ruleId;

  // If rule is authorized
  if (session) {

    // GET method to read specific app rule
    if (req.method === 'GET') {
      try {
        const rule = await getDocuments('rules', ObjectId(ruleId));
        return res.status(200).json(rule);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // PATCH method to update specific app rule
    if (req.method === 'PATCH') {
      try {
        const response = await patchDocument('rules', { _id: ObjectId(ruleId) }, req.body);
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }


    // DEL method to delete specific app rule
    if (req.method === 'DELETE') {
      try {
        const rule = await deleteDocument('rules', { _id: ObjectId(ruleId) });
        console.log(rule);
        return res.status(200).json(rule);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // If method is not supported
    return res.status(405).json({ error: 'Method not allowed' });

  }

  // If rule is not authorized
  res.status(403).json({
    error: "You must be sign in to view the protected content on this page.",
  })
}