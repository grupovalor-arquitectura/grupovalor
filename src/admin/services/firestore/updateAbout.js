import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";

export default async function updateAbout(data) {
  const aboutRef = doc(db, "about", "content");

  await updateDoc(aboutRef, data);
}