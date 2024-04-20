import React from 'react';
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      <img
  src={product.images[0]}   
  alt={product.name}        
  className="w-full h-auto" 
  style={{ width: '200px', height: '200px' }}
/>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-500 font-bold">
              ${product.price.unit_amount / 100} {product.price.currency}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;

