import { getDocuments, insertDocument } from "../../../helpers/db";
import { validateAPI } from "../../../helpers/form";
import getSchema from "../../../helpers/schemas";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import createSlug from "../../../helpers/slug-creator";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Event } from "../../../models/collections/Events";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  // GET method to read validated events (for public & admin access)
  if (req.method === "GET") {
    try {
      let events: Event[] = [];
      // For admin access
      if (session) {
        events = await getDocuments<Event>({
          collection: "events",
          sort: { createdAt: -1 },
        });
      }
      // For public access
      else {
        events = await getDocuments<Event>({
          collection: "events",
          params: { validated: true },
          sort: { date: 1 },
        });
      }
      return res.status(200).json(events);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }

  // POST method to create a new event
  if (req.method === "POST") {
    let data: Event;
    // * Transform data (slug, createdAt, type)
    try {
      data = req.body.data;

      // Create slug from title
      data.slug = createSlug(data.title);

      // Check if slug is unique. If not, add a number to the end of the slug
      const existingSlug = await getDocuments<Event>({
        collection: "events",
        params: { slug: data.slug },
      });
      if (existingSlug.length > 0) {
        data.slug = `${data.slug}-${existingSlug.length + 1}`;
      }

      // Add createdAt field
      data.createdAt = new Date().toISOString();

      // If user is not an admin and manages to create a Coupe de France / Tour Stop event, defaults to "open"
      if (!session && (data.type === "cdf" || data.type === "tour-stop")) {
        data.type = "open";
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Bad request" });
    }

    // * Validate the data
    try {
      const schema = getSchema("event");
      // Actual validation
      validateAPI({ data, schema });
    } catch (error) {
      console.error("ERROR 400 - events", error.message);
      return res.status(400).json({ message: error.message });
    }

    // * Send the validated data to the database
    try {
      // Check if the event title alreay exists
      const event = await getDocuments<Event>({
        collection: "events",
        params: { title: data.title },
      });
      if (event.length > 0) {
        return res.status(400).json({
          message:
            "Ce nom de event existe déjà. Veuillez en indiquer un nouveau.",
        });
      }

      // Add a validated:false property to the data
      data.validated = false;

      await insertDocument<Event>({
        collection: "events",
        document: data,
      });

      return res.status(201).json({
        message:
          "L'event a bien été enregistré. Il sera validé par un membre de la fédération.",
      });
    } catch (error) {
      console.error("ERROR 500, events", error.message);
      return res.status(500).json({
        error:
          "Une erreur est survenue lors de la création du event dans la base de données. Veuillez réessayer.",
        details: error.message,
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
