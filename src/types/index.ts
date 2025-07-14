export type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    rating: number;
    favorite?: boolean;
};

export type Category = {
    id: string;
    slug: string;
    name: string;
    url: string;
};

export type CartItem = Product & {
    quantity: number;
};