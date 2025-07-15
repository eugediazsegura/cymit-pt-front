import { render, fireEvent } from "@testing-library/react";
import { CartButton } from "@/components/cart/CartButton";
import { useModalStore as mockUseModalStore } from "@/store/ModalStore";

jest.mock('@/store/ModalStore', () => ({
    useModalStore: jest.fn(),
}));

describe('CartButton', () => {
    const openModal = jest.fn();

    beforeEach(() => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ openModal })
    });

    it('should call openModal when clicked', () => {
        const { getByRole } = render(<CartButton />);
        const button = getByRole('button');
        fireEvent.click(button);
        expect(openModal).toHaveBeenCalledWith('cart');
    });
})