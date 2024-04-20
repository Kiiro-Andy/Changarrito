import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="container mx-auto mt-10">
      <div className="bg-pink-100 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">¡Compra exitosa!</h1>
        <p className="text-lg text-pink-700 mb-6">
          Tu compra se ha realizado con éxito. ¡Gracias por tu compra!
        </p>
        <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
