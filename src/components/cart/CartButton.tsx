import { useModalStore } from '@/store/ModalStore';
import { IconButton } from '../ui/IconButton'
import CartIcon from '@/assets/icons/shopping-cart.svg'

export const CartButton = () => {
    const { openModal } = useModalStore();
    return (
        <IconButton icon={CartIcon} onClick={() => openModal('cart')} ariaLabel="Cart" />
    )
}
