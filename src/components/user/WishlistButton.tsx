import { IconButton } from "../ui/IconButton"
import WishlistIcon from '@/assets/icons/heart.svg'

export const WishlistButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconButton icon={WishlistIcon} onClick={onClick} ariaLabel="Wishlist" />
    )
}
