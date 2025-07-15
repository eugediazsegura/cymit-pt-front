import BackIcon from '@/assets/icons/arrow-left-circle.svg'
import { useNavigate } from "react-router-dom";

export const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            onClick={() => navigate('/')}
            className='back-button flex self-start mt-5 items-center gap-2 text-purple-dark text-lg cursor-pointer rounded-4xl  hover:bg-purple-ultralight p-2'>
            <img src={BackIcon} alt="Back" className="hover: filter hover:hue-rotate-90 hover:brightness-125" />Go Back
        </button>
    )
}
