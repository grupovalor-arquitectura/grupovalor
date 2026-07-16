import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";

export default async function updateHome(data) {
  const homeRef = doc(db, "home", "content");

  await updateDoc(homeRef, data);
}