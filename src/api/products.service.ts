import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const GET = async( url: string, type: string ) => {
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error("Error al obtener los productos");
            console.error(response);
        }
        const data = await response.data;
        if (!data) {
            throw new Error("No se encontraron productos");       
        }
        return data;
    } catch (error) {
        console.error(error);
    }

}

class Product {
    all = async () => {
        return await GET(`${API_URL}/products?limit=0`, "all");
    }

    paginated = async (page: number, limit: number) => {
        const skip = (page - 1) * limit;
        return await GET(`${API_URL}/products?limit=${limit}&page=${page}&skip=${skip}`, "paginated");
    }

}