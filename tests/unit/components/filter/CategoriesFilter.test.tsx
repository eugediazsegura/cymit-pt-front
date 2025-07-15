import { CategoriesFilter } from "@/components/filters/CategoriesFilter";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

jest.mock('@/api/services', () => ({
    Category: {
        all: () => Promise.resolve([
            { id: 1, name: 'category', slug: 'test-category1', url: '/test-category' },
            { id: 2, name: 'category', slug: 'test-category2', url: '/test-category' }
        ]),
    },
    Product: {
        paginated: (page: number, limit: number, url?: string) => Promise.resolve({
            products: [{ id: 1, title: 'Product 1', category: 'Category 1', price: 100.99, discountPercentage: 9.99, thumbnail: 'https://via.placeholder.com/150', rating: 4.5, url: '/test-url' }],
            productTotal: 10,
            page: page,
            limit: limit,
            url: url
        }),
    },
}));

describe('CategoriesFilter', () => {
    const setup = () => {
        return render(<CategoriesFilter />);
    }

    it('should render categories', async () => {
        const { findAllByRole } = setup();
        const categories = await findAllByRole('radio');

        expect(categories).toHaveLength(2);
        expect(categories[0]).toHaveAttribute('name', 'category');
        expect(categories[0]).toHaveAttribute('value', '/test-category');
        expect(categories[0].nextSibling?.textContent).toBe('category');
        expect(categories[1]).toHaveAttribute('name', 'category');
        expect(categories[1]).toHaveAttribute('value', '/test-category');
        expect(categories[1].nextSibling?.textContent).toBe('category');
    });

    it('calls handleUrlChange when a category is selected', async () => {
        const { findAllByRole } = setup();

        const categories = await findAllByRole('radio');

        act(() => {
            fireEvent.click(categories[0]);
        });
        await waitFor(() => {
            expect(categories[0]).toBeChecked();
        })
    });
});