import React from "react";

function LoginForm({ onSubmit }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "pink",
          padding: "2rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px", 
          width: "90%", 
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Inicia sesión para ver tu perfil
        </h2>
        <form
          onSubmit={(e) => onSubmit(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: "100%",
              border: "2px solid #d1d5db",
              padding: "0.75rem 1rem",
              marginBottom: "1rem", 
              borderRadius: "0.375rem",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            type="text"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            style={{
              width: "100%",
              border: "2px solid #d1d5db",
              padding: "0.75rem 1rem",
              marginBottom: "1rem", 
              borderRadius: "0.375rem",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#fc67fa", 
              color: "#fff",
              fontWeight: "bold",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.375rem",
              transition: "background-color 0.3s",
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;