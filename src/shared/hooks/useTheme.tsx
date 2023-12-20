import { useContext } from "react";
import { THEME_STORAGE_KEY, Theme } from "../context/theme/types";
import { ThemeContext } from "../context/theme/ThemeContext";

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