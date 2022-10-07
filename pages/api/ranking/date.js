import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import { patchDocument } from "../../../helpers/db";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    // Protected by session
    if (session) {
      // POST method to create a new rule file (only for admins)
      if (req.method === "POST") {
        const { data } = req.body;

        // * Send the validated data to the database
        try {
          // Add the createdAt timestamp

          await patchDocument(
            "ranking",
            { _id: ObjectId("6315dbab85098f7156bde68b") },
            data
          );
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
