import db from "../../../lib/spiketimate-firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const mensRanking = [];
    const querySnapshot = await getDocs(
      collection(db, "/rankingrf/5HCZN4mXIa3pzBuQ2dQO/teams")
    );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      mensRanking.push({
        ...doc.data(),
      });
    });

    mensRanking.sort((a, b) => a.rank - b.rank);
    return res.send(mensRanking);
  }
}
