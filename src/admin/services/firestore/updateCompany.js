import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../../firebase/firestore";

export default async function updateCompany(company) {
  if (!company?.id) {
    throw new Error("La compañía no tiene un id.");
  }

  const companyRef = doc(
    db,
    "companies",
    company.id
  );

  const { id, ...companyData } = company;

  await updateDoc(companyRef, companyData);
}