import { createContext } from 'react';
import { ThemeContext as ThemeContextInterface } from './types';

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);