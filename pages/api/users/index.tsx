import { getServerSession } from "next-auth/next";
import { getDocuments } from "../../../helpers/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import type { User } from "../../../models/collections/Users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getServerSession(req, res, authOptions);

    // If user is authorized
    if (session) {
      // GET method to read app members
      if (req.method === "GET") {
        try {
          const users = await getDocuments<User>({
            collection: "users",
            fields: { password: 0, image: 0 },
          });
          return res.status(200).json(users);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal server error" });
        }
      }

      // If method is not supported
      return res.status(405).json({ error: "Method not allowed" });
    }

    // If user is not authorized
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
