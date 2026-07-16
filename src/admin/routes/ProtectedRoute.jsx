import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const {
    user,
    loading,
  } = useAuth();

  // Firebase aún está comprobando la sesión
  if (loading) {
    return null;
  }

  // No existe usuario autenticado
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Usuario autenticado
  return children;
}