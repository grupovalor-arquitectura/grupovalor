import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function updateHome(data) {
  const homeRef = doc(db, "home", "content");

  return saveWithVersion(() => updateDoc(homeRef, data));
}