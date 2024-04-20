import React, { useState } from "react";
import { Layout } from "../components";
import LoginForm from "../components/LoginForm";
import { loginEmail } from "../functions";

function Login() {
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;

    try {
      await loginEmail(correo, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          setError("Correo electrónico o contraseña incorrectos.");
          break;
        case "auth/invalid-email":
          setError("El formato del correo electrónico es inválido.");
          break;
        default:
          setError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
          break;
      }
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <LoginForm onSubmit={handleLogin} />
      </div>
    </Layout>
  );
}

export default Login;
