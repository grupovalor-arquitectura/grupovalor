import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/storage";

export default async function uploadAboutImage(file, path) {
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);

  return file.name;
}