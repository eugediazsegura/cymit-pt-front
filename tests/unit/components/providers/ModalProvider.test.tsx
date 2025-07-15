import { render, fireEvent } from '@testing-library/react'
import { ModalProvider } from '@/components/providers/ModalProvider'
import { useModalStore as mockUseModalStore } from '@/store/ModalStore'

jest.mock('@/store/ModalStore', () => ({
    useModalStore: jest.fn(),
}))

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

jest.mock('@/components/filters/CategoriesFilter', () => ({
    __esModule: true,
    CategoriesFilter: () => <div>CategoriesFilter</div>,
}));


describe('ModalProvider', () => {
    const closeModal = jest.fn()

    beforeEach(() => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ modal: null, closeModal })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should not render anything if modal is null', () => {
        const { container } = render(<ModalProvider />)
        expect(container.firstChild).toBeNull()
    })

    it('should render ModalCart when modal is "cart"', () => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ modal: 'cart', closeModal })
        const { getByText } = render(<ModalProvider />)
        expect(getByText(/There are no products in the cart./i)).toBeInTheDocument()
    })

    it('should render ModalFavorites when modal is "favorites"', () => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ modal: 'favorites', closeModal })
        const { getByText } = render(<ModalProvider />)
        expect(getByText(/There are no favorite products./i)).toBeInTheDocument()
    })

    it('should render ModalFilter when modal is "filter"', () => {
        window.innerWidth = 400;
        window.dispatchEvent(new Event('resize'));

        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ modal: 'filter', closeModal })
        const { container } = render(<ModalProvider />)
        expect(container.querySelector('.filter-modal')).toBeInTheDocument()
    })

    it('should call closeModal when background is clicked', () => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ modal: 'cart', closeModal })
        const { container } = render(<ModalProvider />)
        const modalBg = container.querySelector('#modal-bg')
        fireEvent.click(modalBg as HTMLElement)

        expect(closeModal).toHaveBeenCalledTimes(1)
    })

})