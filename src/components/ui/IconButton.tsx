
type IconButtonProps = {
    icon: string;
    onClick: () => void;
    ariaLabel: string;
};

export const IconButton = ({ icon, onClick, ariaLabel }: IconButtonProps) => {
    return (
        <button type="button" className="px-1 hover:cursor-pointer" aria-label={ariaLabel} onClick={onClick}>
            <img src={icon} alt={ariaLabel} />
        </button>
    )
}
