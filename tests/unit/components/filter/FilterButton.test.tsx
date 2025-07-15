import { render, fireEvent } from '@testing-library/react'
import { FilterButton } from '@/components/filters/FilterButton'
import { useModalStore as mockUseModalStore } from '@/store/ModalStore'

jest.mock('@/store/ModalStore', () => ({
    useModalStore: jest.fn(),
}))

describe('FilterButton', () => {
    const openModal = jest.fn()
    beforeEach(() => {
        ; (mockUseModalStore as unknown as jest.Mock).mockReturnValue({ openModal })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should call openModal when clicked', () => {
        const { getByRole } = render(<FilterButton />)
        fireEvent.click(getByRole('button'))
        expect(openModal).toHaveBeenCalledWith('filter')
    })
})
