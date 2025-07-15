type row = {
    name: string,
    value: string
}
type TextTabProps = {
    row: row[]
}

export const TextTab = ({ row }: TextTabProps) => {
    return (
        <div className="flex flex-col my-8">
            {row.map((item, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-purple-ultralight' : 'bg-white'} p-2 my-3 flex flex-row justify-between lg:w-full `}>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-sm">{item.value}</p>
                </div>
            ))}
        </div>
    )
}
