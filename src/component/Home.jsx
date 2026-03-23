import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error cargando productos:", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Productos</h1>

            {products.map((p) => (
                <div key={p.id} className="border p-2 mt-2">
                    {p.name}
                </div>
            ))}
        </div>
    );
}