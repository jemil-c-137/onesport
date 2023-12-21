import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import classes from './Navbar.module.scss';


export function Navbar() {

    return (
        <nav className={classes.navbar}>
            <h1>OneSport</h1>
            <div>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
