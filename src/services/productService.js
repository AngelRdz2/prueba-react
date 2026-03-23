import api from "./api";

// Obtener todos
export const getProducts = async () => {
    const res = await api.get("/products");
    return res.data;
};

// Crear
export const createProduct = async (data) => {
    const res = await api.post("/products", data);
    return res.data;
};

// Actualizar
export const updateProduct = async (id, data) => {
    const res = await api.put(`/products/${id}`, data);
    return res.data;
};

// Eliminar
export const deleteProduct = async (id) => {
    const res = await api.delete(`/products/${id}`);
    return res.data;
};