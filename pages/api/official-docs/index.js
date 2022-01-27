import { getDocuments, insertDocument } from "../../../helpers/db";
import { getSession } from "next-auth/react";
import { validateAPI } from "../../../helpers/form";
import getSchema from "../../../helpers/schemas";

export default async function handler(req, res) {
  // Get the doctype. Will be used to only fetch docs of that type
  const { doctype } = req.query;

  const session = await getSession({ req });
  // GET method to read rule files
  if (req.method === "GET") {
    try {
      const officialDocs = await getDocuments(
        "official-docs",
        doctype ? { doctype } : null,
        null,
        { _id: -1 }
      );
      return res.status(200).json(officialDocs);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // Protected by session
  if (session) {
    // POST method to create a new rule file (only for admins)
    if (req.method === "POST") {
      const { data } = req.body;

      // * Validate the data
      try {
        // Define the POST CLUB schema
        const schema = getSchema("official-docs");

        // Actual validation
        validateAPI({ data, schema });
      } catch (error) {
        console.error("ERROR 400 - officialDocs", error.message);
        return res.status(400).json({ message: error.message });
      }

      // * Send the validated data to the database
      try {
        // Add the createdAt timestamp
        data.createdAt = new Date();

        await insertDocument("official-docs", data);
        return res
          .status(201)
          .json({ message: "Le fichier de règle a bien été enregistré." });
      } catch (error) {
        console.error("ERROR 500, clubs", error.message);
        return res
          .status(500)
          .json({
            error:
              "Une erreur est survenue lors de la création du fichier de règles dans la base de données. Veuillez réessayer.",
            details: error.message,
          });
      }
    }
  }

  return res
    .status(401)
    .json({ error: "You must be authorized to create a rule file" });
}
