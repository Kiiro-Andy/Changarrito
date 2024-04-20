import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";
import ItemSection from "../components/ItemSection";
import { Layout } from "../components/";
import { searchProducts } from "../functions/search";

function Home() {
    const [productos, setProductos] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function getProducts() {
            const products = await getActiveProducts();
            setProductos(products);
        }
        getProducts();
    }, []);

    // Manejar cambios en el campo de búsqueda
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar los productos basados en el término de búsqueda
    const filteredProductos = productos ? searchProducts(productos, searchTerm) : [];

    return (
        <Layout>
            {/* Campo de búsqueda */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                />
            </div>

            {/* Mostrar los productos filtrados */}
            <ItemSection title="Lo más vendido" productos={filteredProductos} />
            <ItemSection title="Nuevos Productos" productos={filteredProductos} />
        </Layout>
    );    
}

export default Home;