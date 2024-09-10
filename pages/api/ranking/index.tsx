import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/spiketimate-firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const mensRanking: Record<string, any>[] = [];
    const querySnapshot = await getDocs(
      collection(db, "/rankingrf/5HCZN4mXIa3pzBuQ2dQO/teams"),
    );

    for (const doc of querySnapshot.docs) {
      mensRanking.push({
        ...doc.data(),
      });
    }

    mensRanking.sort((a, b) => a.rank - b.rank);
    return res.send(mensRanking);
  }
}
