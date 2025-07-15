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

export type ProductComplete = Product & {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {
        depth: number;
        height: number;
        width: number;
    };
    images: string[];
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
}


export type Review = {
    id: number;
    rating: number;
    comment: string;
    reviewerName: string;
    date: string;
}

export type TabItem = {
    label: string;
    content: React.ReactNode;
};