import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { THEME_STORAGE_KEY, Theme, ThemeContext as ThemeContextInterface } from './types';

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);