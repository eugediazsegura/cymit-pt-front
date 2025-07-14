import { create } from 'zustand'

type ModalType = 'cart' | 'favorites' | null // escalable para luego agregar otros tipos

type ModalStore = {
    modal: ModalType
    openModal: (modal: ModalType) => void
    closeModal: () => void
}

export const useModalStore = create<ModalStore>((set) => ({
    modal: null,
    openModal: (modal) => set({ modal }),
    closeModal: () => set({ modal: null }),
}))