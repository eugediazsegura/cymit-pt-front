import { TextTab } from "@/components/ui/TextTab"
import { render } from "@testing-library/react"

describe('TextTab', () => {
    it('should render correctly', () => {
        const row = [
            { name: 'Name', value: 'John Doe' },
            { name: 'Age', value: '25' },
        ]
        const { getByText } = render(<TextTab row={row} />)

        expect(getByText('Name')).toBeInTheDocument()
        expect(getByText('John Doe')).toBeInTheDocument()
        expect(getByText('Age')).toBeInTheDocument()
        expect(getByText('25')).toBeInTheDocument()
    })
})
