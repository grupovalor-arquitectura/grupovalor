import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { companiesData } from "../data/companiesData";


export async function seedCompanies() {
  try {
    for (const company of Object.values(companiesData)) {

      const documentId =
        company.slug
          .split("-")
          .map((word, index) =>
            index === 0
              ? word
              : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");

      await setDoc(
        doc(db, "companies", documentId),
        {
          name: company.name,

          slug: company.slug,

          header: {
            tagline: company.tagline,
            intro: company.intro,
          },

          branding: company.branding,

          services: company.services,

          leaders: company.leaders,
        }
      );

      console.log(`✔ ${documentId} cargado`);
    }

    console.log("Companies cargadas correctamente.");
  } catch (error) {
    console.error(error);
  }
}