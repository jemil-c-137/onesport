import { type PropsWithChildren, useState } from 'react'
import { THEME_STORAGE_KEY, Theme } from './types'
import { ThemeContext } from './ThemeContext'

const defaultTheme: Theme = localStorage.getItem(THEME_STORAGE_KEY) as Theme ?? Theme.DARK

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState(defaultTheme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
