import { CategoriesFilter } from "../filters/CategoriesFilter"
type ModalFilterProps = {
    onClose: () => void
}
export const ModalFilter = ({ onClose }: ModalFilterProps) => {
    void onClose;
    return (
        <div className=" filter-modal bg-white p-6 rounded-md shadow-md w-[100vw] md:w-[400px] max-h-[90vh] overflow-y-auto z-60">
            <CategoriesFilter />
        </div>
    )
}
