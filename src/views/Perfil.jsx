import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { Layout, LoginForm } from "../components";
import { useUserContext } from "../contexts/userContext";
import { auth } from "../firebase/credenciales";
import { loginEmail, getPaymentsByUID } from "../functions/";

function Perfil() {
  function login(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(correo, password);
  }

  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function getPayments() {
      if (!user) return;
      const payments = await getPaymentsByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        {user ? (
          <div className="text-center">
            <p className="text-3xl font-bold text-pink-600 mb-4">
              ¡Bienvenido, {user.email}!
            </p>
            <div className="my-6">
              {payments.length > 0 ? (
                <div style={{ background: "#ee9ca7", background: "-webkit-linear-gradient(to right, #ffdde1, #ee9ca7)", background: "linear-gradient(to right, #ffdde1, #ee9ca7)" }}>
                  <p className="text-lg font-semibold mb-2 text-pink-700">Tus Pagos:</p>
                  {payments.map((payment, index) => (
                    <div key={index} className="bg-pink-200 rounded-lg p-4 mb-4">
                      <p className="text-xl mb-2 text-pink-800">{payment.amount / 100} MXN</p>
                      <p className="text-pink-600">{payment.items[0].description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-pink-700">Aún no has realizado ningún pago.</p>
              )}
            </div>
            <button
              onClick={() => signOut(auth)}
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div className="w-1/2 mx-auto">
            <p className="text-2xl mb-3">Inicia sesión para ver tu perfil.</p>
            <LoginForm onSubmit={login} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Perfil;
