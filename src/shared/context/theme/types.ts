export const THEME_STORAGE_KEY = 'onesport-theme'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export interface ThemeContext {
    theme: Theme
    setTheme: (theme: Theme) => void
}
