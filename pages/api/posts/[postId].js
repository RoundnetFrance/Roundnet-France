import { ObjectId } from "mongodb";
import { getSession } from "next-auth/react";
import {
  getDocument,
  patchDocument,
  deleteDocument,
} from "../../../helpers/db";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const postId = req.query.postId;

  // If post is authorized
  if (session) {
    // GET method to read specific app post
    if (req.method === "GET") {
      try {
        const post = await getDocument("posts", ObjectId(postId));
        return res.status(200).json(post);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // PATCH method to update specific app post
    if (req.method === "PATCH") {
      const data = req.body;
      delete data._id;

      try {
        const response = await patchDocument(
          "posts",
          { _id: ObjectId(postId) },
          data
        );
        return res.status(200).json(response);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // DEL method to delete specific app post
    if (req.method === "DELETE") {
      try {
        const post = await deleteDocument("posts", {
          _id: ObjectId(postId),
        });
        return res.status(200).json(post);
      } catch (error) {
        console.error(error);
        return res.status(500).json(error);
      }
    }

    // If method is not supported
    return res.status(405).json({ error: "Method not allowed" });
  }

  // If post is not authorized
  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
