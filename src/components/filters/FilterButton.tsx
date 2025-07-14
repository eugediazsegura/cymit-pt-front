import { useModalStore } from "@/store/ModalStore";
import iconFilter from "@/assets/icons/funnel.svg";
export const FilterButton = () => {
    const { openModal } = useModalStore();
    return (
        <button type="button" className=" flex self-end mt-5 lg:hidden bg-purple-dark rounded-md p-2  hover:cursor-pointer" onClick={() => openModal('filter')} aria-label="Filter">
            <img src={iconFilter} alt="Filter" className="hover: filter hover:hue-rotate-90 hover:brightness-125" />
        </button>
    )
}