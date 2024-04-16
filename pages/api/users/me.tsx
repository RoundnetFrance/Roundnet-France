import { getServerSession } from "next-auth/next";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";
import { hash } from "bcryptjs";
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
      // GET method to read self info
      if (req.method === "GET") {
        try {
          const users = await getDocument<User>({
            collection: "users",
            params: { email: session.user?.email ?? undefined },
            fields: { password: 0, image: 0 },
          });
          return res.status(200).json(users);
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Une erreur est survenue",
          });
        }
      }

      // PATCH method to update self info
      if (req.method === "PATCH") {
        if (req.body.password) {
          req.body.password = await hash(req.body.password, 12);
          delete req.body.passwordConfirm;
        }
        try {
          const user = await patchDocument<User>({
            collection: "users",
            params: { email: session.user?.email ?? undefined },
            document: req.body,
          });
          return res.status(200).json(user);
        } catch (error) {
          console.error(error.message);
          return res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Une erreur est survenue",
          });
        }
      }

      // DELETE method to delete self account
      if (req.method === "DELETE") {
        try {
          await deleteDocument<User>({
            collection: "users",
            params: { email: session.user?.email ?? undefined },
          });
          return res.status(200).json({ message: "Compte supprimé" });
        } catch (error) {
          console.error(error.message);
          return res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Une erreur est survenue",
          });
        }
      }

      // If method is not supported
      return res.status(405).json({ error: "Method not allowed" });
    }

    // If user is not authorized
    res.send({
      error: "You must be logged to view the protected content on this page.",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
