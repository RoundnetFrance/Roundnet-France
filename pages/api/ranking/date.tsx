import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { patchDocument } from "../../../helpers/db";
import { authOptions } from "../auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);

    // Protected by session
    if (session) {
      // POST method to create a new rule file (only for admins)
      if (req.method === "POST") {
        const { data } = req.body;

        try {
          await patchDocument({
            collection: "ranking",
            params: { _id: new ObjectId("6315dbab85098f7156bde68b") },
            document: data,
          });
          return res
            .status(201)
            .json({ message: "La date du ranking a bien été mise à jour." });
        } catch (error) {
          console.error("ERROR 500, ranking", error.message);
          return res.status(500).json({
            error:
              "Une erreur est survenue lors de la mise à jour du ranking. Veuillez réessayer.",
            details: error.message,
          });
        }
      }
    }

    return res
      .status(401)
      .json({ error: "You must be authorized to update ranking date" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
