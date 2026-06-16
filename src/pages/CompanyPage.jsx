import { useParams } from "react-router-dom";
import { companiesData } from "../data/companiesData";

export default function CompanyPage() {
  const { slug } = useParams();

  const company = companiesData[slug];

  if (!company) {
    return <h1>Empresa no encontrada</h1>;
  }

  return (
    <>
      <h1>{company.name}</h1>

      <ul>
        {company.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </>
  );
}