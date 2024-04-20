import React from "react";
import ItemCard from "./ItemCard";

function ItemSection({ productos, title }) {
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos &&
          productos.map((producto) => (
            <ItemCard key={producto.id} product={producto} />
          ))}
      </div>
    </div>
  );
}

export default ItemSection;
