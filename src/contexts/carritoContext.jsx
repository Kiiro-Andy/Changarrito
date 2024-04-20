import React, { useState, useContext, createContext } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const removeProductFromCarrito = (productId) => {
    console.log("ID del producto a eliminar:", productId);
    console.log("Productos en el carrito antes de eliminar:", carrito);
    setCarrito(carrito.filter((producto) => producto.id !== productId));
  };

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, removeProductFromCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context)
    throw new Error(
      "useCarritoContext must be used within a CarritoContextProvider"
    );
  return context;
};