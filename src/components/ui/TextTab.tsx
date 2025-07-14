type row = {
    name: string,
    value: string
}
type TextTabProps = {
    row: row[]
}

export const TextTab = ({ row }: TextTabProps) => {
    return (
        row.map(({ name, value }) => {
            <div className={`flex flex-col`}>
                <h3 className="text-md font-bold">{name}</h3>
                <p className="text-md text-gray-500">{value}</p>
            </div>
        })
    )
}
