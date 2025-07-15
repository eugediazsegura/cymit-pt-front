import { fireEvent, render } from "@testing-library/react";
import { ProductPageContent } from "@/components/product/ProductPageContent";
import { BrowserRouter as Router } from "react-router-dom";
import { useProductStore as mockUseProductStore } from "@/store/ProductStore";

jest.mock('@/store/ProductStore', () => ({
    useProductStore: jest.fn(),
}));

describe('ProductPageContent', () => {
    const mockProductComplete = {
        title: 'Test Product',
        category: 'Test Category',
        rating: 4.5,
        price: 100,
        description: 'This is a test product description',
        dimensions: { width: 10, height: 20, depth: 5 },
        weight: 1.5,
        returnPolicy: '30 days return',
        shippingInformation: 'Free shipping',
        warrantyInformation: '2 years warranty',
        images: ['test-image.jpg'],
        views: [],
        availabilityStatus: 'In Stock',
        brand: 'Test Brand',
        sku: 'ABC123',
        stock: 10,
        tags: ['tag1', 'tag2'],
        thumbnail: 'test-image.jpg',
        minimumOrderQuantity: 1,
    };

    beforeEach(() => {
        (mockUseProductStore as unknown as jest.Mock).mockReturnValue({ productComplete: mockProductComplete });
    });

    it('should render product details correctly', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <ProductPageContent />
            </Router>
        );

        expect(getByText('Test Product')).toBeInTheDocument();
        expect(getByText('Test Category')).toBeInTheDocument();
        expect(getByText('4.5')).toBeInTheDocument();
        expect(getByText('€100')).toBeInTheDocument();
        expect(getByText('This is a test product description')).toBeInTheDocument();
        expect(getByText('10 cm')).toBeInTheDocument();
        expect(getByText('20 cm')).toBeInTheDocument();
        expect(getByText('5 cm')).toBeInTheDocument();
        expect(getByText('1.5 kg')).toBeInTheDocument();
        expect(getByAltText('Test Product')).toHaveAttribute('src', 'test-image.jpg');
        expect(getByText('Test Brand')).toBeInTheDocument();
        expect(getByText('ABC123')).toBeInTheDocument();
        expect(getByText('tag1, tag2')).toBeInTheDocument();
    });

    it('should render add to cart button', () => {
        const { getByText } = render(
            <Router>
                <ProductPageContent />
            </Router>
        );
        expect(getByText('Add to cart')).toBeInTheDocument();
    });

    it('should render tabs', () => {
        const { getByText } = render(
            <Router>
                <ProductPageContent />
            </Router>
        );
        expect(getByText('Description')).toBeInTheDocument();
    });

    it('should render back-button', () => {
        const { getByText } = render(
            <Router>
                <ProductPageContent />
            </Router>
        );
        expect(getByText('Go Back')).toBeInTheDocument();
    });

    it('should change content when changing tab', () => {
        const { getByText, queryByText } = render(
            <Router>
                <ProductPageContent />
            </Router>
        );

        // Por defecto muestra dimensiones
        expect(getByText('10 cm')).toBeInTheDocument();
        expect(getByText('20 cm')).toBeInTheDocument();
        expect(getByText('5 cm')).toBeInTheDocument();
        expect(getByText('1.5 kg')).toBeInTheDocument();

        // Cambiá a la tab "Additional information"
        fireEvent.click(getByText('Additional information'));

        // Ahora debe mostrar info adicional
        expect(getByText('30 days return')).toBeInTheDocument();
        expect(getByText('Free shipping')).toBeInTheDocument();
        expect(getByText('2 years warranty')).toBeInTheDocument();

        // Las dimensiones ya no deberían estar
        expect(queryByText('10 cm')).not.toBeInTheDocument();
    });
});
