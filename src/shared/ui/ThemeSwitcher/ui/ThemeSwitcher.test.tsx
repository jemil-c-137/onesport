import { render, screen } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeProvider } from '@/shared/context/theme/ThemeProvider'

describe('Theme Switcher', () => {
    test('should render', () => {
        render(<ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
