import { getDocuments, insertDocument } from "../../../helpers/db";
import { getSession } from "next-auth/react";
import { validateAPI } from "../../../helpers/form";
import getSchema from "../../../helpers/schemas";
import type { FederationMember } from "../../../models/collections/FederationMembers";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Get session info
    const session = await getSession({ req });

    // GET method to read federation members
    if (req.method === "GET") {
      try {
        const federationMembers = await getDocuments<FederationMember>({
          collection: "federation-members",
        });
        return res.status(200).json(federationMembers);
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
          const schema = getSchema("federation-members");

          // Actual validation
          validateAPI({ data, schema });
        } catch (error) {
          console.error("ERROR 400 - federation-members", error.message);
          return res
            .status(400)
            .json({ message: error.message || "Une erreur est survenue" });
        }

        // * Send the validated data to the database
        try {
          await insertDocument<FederationMember>({
            collection: "federation-members",
            document: data,
          });
          return res
            .status(201)
            .json({ message: "Le nouveau membre a bien été enregistré." });
        } catch (error) {
          console.error("ERROR 500, federation-members", error.message);
          return res.status(500).json({
            error:
              "Une erreur est survenue lors de la création du nouveau membre dans la base de données. Veuillez réessayer.",
            details: error.message,
          });
        }
      }
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
