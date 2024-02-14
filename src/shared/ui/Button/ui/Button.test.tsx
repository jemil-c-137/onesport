import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('button', () => {
    test('renders button and clicks', () => {
        render(<Button />)
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })
})
