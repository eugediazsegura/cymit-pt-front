import { useModalStore } from "@/store/ModalStore";
import { IconButton } from "../ui/IconButton"
import WishlistIcon from '@/assets/icons/heart.svg'

export const WishlistButton = () => {
    const { openModal } = useModalStore();
    return (
        <IconButton icon={WishlistIcon} onClick={() => openModal('favorites')} ariaLabel="Wishlist" />
    )
}
