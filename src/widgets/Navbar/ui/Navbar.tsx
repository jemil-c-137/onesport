import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import classes from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';


export function Navbar() {

    return (
        <nav className={classNames(classes.navbar, ['content-container'])}>
            <input type="text" placeholder='Type to search...' />
            <div className={classes.buttons}>
                <Button>
                    Go Premium
                </Button>
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
