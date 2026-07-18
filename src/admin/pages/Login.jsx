import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginContainer from "../components/login/LoginContainer";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");

      await login(email, password);

      navigate("/admin");
    } catch (error) {
      console.error(error);
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <LoginContainer
      email={email}
      password={password}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
}