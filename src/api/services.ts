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
    paginated = async (page: number, limit: number) => {
        const skip = (page - 1) * limit;
        const response = await GET(`${API_URL}/products?limit=${limit}&page=${page}&skip=${skip}`, "paginated");
        const {products,total} = response;
        return products
    }
}


export default class API{
    static Product:Product = new Product();
} 