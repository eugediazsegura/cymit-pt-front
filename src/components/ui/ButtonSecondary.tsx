type ButtonSecondaryProps = {
    onClick: () => void,
    data: string
}

export const ButtonSecondary = ({ onClick, data }: ButtonSecondaryProps) => {
    return (
        <button type="button" onClick={onClick}>{data}</button>
    )
}
