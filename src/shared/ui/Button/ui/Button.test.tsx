import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('button', () => {
    test('renders button and clicks', () => {
        render(<Button>Test</Button>)
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })

    test('should take onClick as prop', () => {
        const handler = jest.fn()
        render(<Button onClick={handler} />)
        fireEvent.click(screen.getByTestId('button'))
        fireEvent.click(screen.getByTestId('button'))
        expect(handler).toHaveBeenCalledTimes(2)
    })
})
