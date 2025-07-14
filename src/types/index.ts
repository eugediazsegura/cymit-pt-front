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
    description: string;
    tags: string[];
    sku: string;
    weight: string;
    stock: number;
    width: number;
    height: number;
    length: number;
    warrantuInfo: string;
    shippingInfo: string;
    reviews: number;
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