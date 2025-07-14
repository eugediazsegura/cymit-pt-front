import { useModalStore } from '@/store/ModalStore'
import ModalCart from '@/components/modals/ModalCart'
import ModalFavorites from '@/components/modals/ModalFavorites'
import { ModalFilter } from '../modals/ModalFilter'

export const ModalProvider = () => {
    const { modal, closeModal } = useModalStore()

    const handleClose = () => closeModal()

    if (!modal) return null

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pb-4 md:px-5">
            {modal === 'cart' && <ModalCart onClose={handleClose} />}
            {modal === 'favorites' && <ModalFavorites onClose={handleClose} />}
            {modal === 'filter' && <ModalFilter onClose={handleClose} />}
            <div id="modal-bg" onClick={handleClose} className="fixed inset-0 z-40 bg-modal-background"></div>
        </div>
    )
}