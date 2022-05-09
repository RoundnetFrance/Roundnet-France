import db from "../../../lib/spiketimate-firebase";
import { collection, query, where } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const entries = await collection(db, "rankingrf").get();
    const entriesData = entries.docs.map((entry) => entry.data());
    console.log(entriesData);
    return res.send("coucou");
  }
}
