import { getSession } from "next-auth/react";
import { getDocuments, insertDocument } from "../../../helpers/db";
import { validateAPI } from "../../../helpers/form";
import getSchema from "../../../helpers/schemas";

export default async function handler(req, res) {
  const session = await getSession({ req });

  // If post is authorized
  // GET method to read app members
  if (req.method === "GET") {
    try {
      const posts = await getDocuments("posts");
      return res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // POST method to create a new rule file (only for admins)
  if (req.method === "POST") {
    // Protected by session
    if (session) {
      const { data } = req.body;

      // * Validate the data
      try {
        // Define the POST CLUB schema
        const schema = getSchema("posts");

        // Actual validation
        validateAPI({ data, schema });
      } catch (error) {
        console.error("ERROR 400 - posts", error.message);
        return res.status(400).json({ message: error.message });
      }

      // * Send the validated data to the database
      try {
        // Add validated & creation timestamp (default to true and now())
        data.validated = true;
        data.createdAt = new Date();

        // insert document
        await insertDocument("posts", data);
        return res
          .status(201)
          .json({ message: "L'article a bien été ajouté." });
      } catch (error) {
        console.error("ERROR 500, posts", error.message);
        return res.status(500).json({
          error:
            "Une erreur est survenue lors de la création de l'article dans la base de données. Veuillez réessayer.",
          details: error.message,
        });
      }
    }

    return res
      .status(401)
      .json({ error: "You must be authorized to perform this action." });
  }

  // If method is not supported
  return res.status(405).json({ error: "Method not allowed" });
}
