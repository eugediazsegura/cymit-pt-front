import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const GET = async (url: string, type: string) => {
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
        const response = await GET(`${API_URL}/products?limit=0`, "all");
        return response;
    }
    paginated = async (page: number, limit: number, url?: string) => {
        const skip = (page - 1) * limit;
        const fetchUrl = url ? url : `${API_URL}/products`;
        const response = await GET(`${fetchUrl}?limit=${limit}&page=${page}&skip=${skip}`, "paginated");
        return response
    }
    search = async (query: string) => {
        const response = await GET(`${API_URL}/products/search?q=${query}`, "search");
        return response;
    }
    single = async (id: string) => {
        const response = await GET(`${API_URL}/products/${id}`, "single");
        return response;
    }
    relatedProducts = async (category: string) => {
        const response = await GET(`${API_URL}/products/category/${category}`, "related");
        return response;
    }
}

class Category {
    all = async () => {
        const response = await GET(`${API_URL}/products/categories`, "all");
        return response;
    }
}


export default class API {
    static Product: Product = new Product();
    static Category: Category = new Category();
} 