import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function updateAbout(data) {
  const aboutRef = doc(db, "about", "content");

  return saveWithVersion(() => updateDoc(aboutRef, data));
}