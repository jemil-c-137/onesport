import { useContext } from "react";
import { THEME_STORAGE_KEY, Theme } from "./types";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (newTheme?: Theme) => {
        const updatedTheme = newTheme || theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(updatedTheme)
        localStorage.setItem(THEME_STORAGE_KEY, updatedTheme);
    }

    return {
        theme,
        toggleTheme
    }
}