import { useEffect, useState } from "react";
import { getCompany } from "../services/companyService";

export default function useCompany(slug) {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCompany() {
      try {
        const data = await getCompany(slug);
        setCompany(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadCompany();
  }, [slug]);

  return {
    company,
    loading,
    error,
  };
}