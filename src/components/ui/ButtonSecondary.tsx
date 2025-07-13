type ButtonSecondaryProps = {
    onClick: () => void,
    data: string
}

export const ButtonSecondary = ({ onClick, data }: ButtonSecondaryProps) => {
    return (
        <button type="button" className="border-2 border-pink-light hover:border-pink-dark text-pink-light hover:text-pink-dark rounded-full py-2 px-4 lg:px-1 lg:w-1/5" onClick={onClick}>{data}</button>
    )
}
