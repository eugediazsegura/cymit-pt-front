import { CategoriesFilter } from "../filters/CategoriesFilter"
interface ModalFilterProps {
    onClose: () => void
}
export const ModalFilter = ({ onClose }: ModalFilterProps) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md w-[100vw] md:w-[400px] max-h-[90vh] overflow-y-auto z-60">
            <CategoriesFilter />
        </div>
    )
}
