import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useCarritoContext } from "../contexts/carritoContext";

function Layout({ children }) {
  const { carrito } = useCarritoContext();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-pink-200 text-pink-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="font-bold text-3xl">
            Changarrito
          </Link>
          <div className="flex items-center space-x-4">
            
            <Link to="/carrito" className="relative">
              <AiOutlineShoppingCart size={30} />
              {carrito.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full text-xs px-2 py-1">
                  {carrito.length}
                </span>
              )}
            </Link>
            <Link to="/perfil">
              <AiOutlineUser size={30} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-pink-50">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-200 text-pink-800 py-4">
        <div className="container mx-auto text-center">
          <span className="font-bold text-xl">Changarrito</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

