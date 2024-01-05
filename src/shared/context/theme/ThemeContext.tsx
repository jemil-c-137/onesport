import { createContext } from 'react'
import { type ThemeContext as ThemeContextInterface } from './types'

export const ThemeContext = createContext<ThemeContextInterface>({} as const as ThemeContextInterface)
