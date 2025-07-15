import { render, fireEvent } from "@testing-library/react";
import { ProductCard } from "@/components/product/ProductCard";
import { BrowserRouter as Router } from "react-router-dom";

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        title: 'Test Product',
        price: 100,
        discountPercentage: 12,
        thumbnail: 'test-image.jpg',
        category: 'Test Category',
        rating: 4.5,
        favorite: false
    };

    it('should render product details correctly', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <ProductCard product={mockProduct} />
            </Router>
        );

        expect(getByText('Test Product')).toBeInTheDocument();
        expect(getByText('€100')).toBeInTheDocument();
        expect(getByText('4.5')).toBeInTheDocument();
        expect(getByText('Test Category')).toBeInTheDocument();
        expect(getByAltText('image product')).toHaveAttribute('src', 'test-image.jpg');
    });

    it('should navigate to product detail page on click', () => {
        const { getAllByRole } = render(
            <Router>
                <ProductCard product={mockProduct} />
            </Router>
        );

        const card = getAllByRole('button');
        fireEvent.click(card[1]);

        expect(window.location.pathname).toBe(`/product/${mockProduct.id}`);
    });
});

