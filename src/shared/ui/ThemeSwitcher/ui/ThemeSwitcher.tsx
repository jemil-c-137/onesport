import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useTheme } from '@/shared/hooks/useTheme';

import classes from './ThemeSwitcher.module.scss';

export function ThemeSwitcher() {

    const { toggleTheme } = useTheme()

    const clickHandler = (e: React.MouseEvent) => {
        toggleTheme();
        (e.target as HTMLButtonElement).classList.add(classes.active);

        setTimeout(() => {
            (e.target as HTMLButtonElement).classList.remove(classes.active)
        }, 1000);
    }

    return (
        <button className={classes.themeSwitcher} onClick={clickHandler}>
            <ThemeIcon fill="var(--active-color)" />
        </button>
    )
}