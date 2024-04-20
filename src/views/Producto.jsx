import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, createCheckoutSession } from "../functions";
import { useCarritoContext } from "../contexts/carritoContext";
import { useUserContext } from "../contexts/userContext";
import { Layout } from "../components/";

function Producto() { 
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();
  const { user } = useUserContext();

  useEffect(() => {
    async function getProductInfo() {
      try {
        const product = await getProductById(id);
        if (!product) {
          window.location = "/notfound";
        }
        setProductInfo(product);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    // Generar un ID único basado en el nombre del producto
    const productId = productInfo.name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    setCarrito([...carrito, { ...productInfo, id: productId }]);
  }

  return (
    <Layout>
      {productInfo && (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div id="producto-izquierda" className="w-full md:w-1/2 p-10">
            <img
              src={productInfo.images[0]}
              alt={productInfo.name}
              className="w-full h-auto"
            />
          </div>
          <div id="producto-derecha" className="w-full md:w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-4">{productInfo.name}</h1>
            <p className="text-lg mb-4">{productInfo.description}</p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <button
                onClick={addToCart}
                className="bg-black text-white px-6 py-3 rounded-md mb-4 md:mb-0 md:mr-4 hover:bg-gray-800 hover:scale-105"
              >
                AÑADIR A CARRITO
              </button>
              <button
                id="buy-button-producto"
                onClick={() => {
                  addToCart();
                  createCheckoutSession(user.uid, [productInfo]);
                }}
                className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-red-800 hover:scale-105"
              >
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Producto;