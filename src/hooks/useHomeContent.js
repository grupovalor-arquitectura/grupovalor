import { useProjects } from "../context/ProjectsContext";

export default function useHomeContent() {
  const { home, loading } = useProjects();

  return {
    content: home,
    loading,
    error: null,
  };
}