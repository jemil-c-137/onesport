import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/hooks/useTheme';

import classes from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {

    const { toggleTheme } = useTheme()

    const clickHandler = () => {
        toggleTheme();
    }

    return (
        <button className={classes.themeSwitcher} onClick={clickHandler}>
            <ThemeIcon fill="var(--active-color)" />
        </button>
    )
}