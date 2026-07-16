import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";

export default async function updateFooter(data) {
  const footerRef = doc(db, "footer", "content");

  await updateDoc(footerRef, data);
}