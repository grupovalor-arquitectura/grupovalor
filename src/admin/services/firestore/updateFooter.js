import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import saveWithVersion from "../../../services/saveWithVersion";

export default async function updateFooter(data) {
  const footerRef = doc(db, "footer", "content");

  return saveWithVersion(() => updateDoc(footerRef, data));
}