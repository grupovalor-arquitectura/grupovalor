import { useEffect, useState } from "react";
import { getHomeContent } from "../services/homeService";

export default function useHomeContent() {
  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHomeContent() {
      try {
        const data = await getHomeContent();

        setContent(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadHomeContent();
  }, []);

  return {
    content,
    loading,
    error,
  };
}