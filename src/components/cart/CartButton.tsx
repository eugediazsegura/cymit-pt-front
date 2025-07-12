import { IconButton } from '../ui/IconButton'
import CartIcon from '@/assets/icons/shopping-cart.svg'

export const CartButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconButton icon={CartIcon} onClick={onClick} ariaLabel="Cart" />
    )
}
