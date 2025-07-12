import { IconButton } from "../ui/IconButton"
import UserIcon from '@/assets/icons/user.svg'

export const UserButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconButton icon={UserIcon} onClick={onClick} ariaLabel="User" />
    )
}
