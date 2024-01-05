import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher'
import classes from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button'
import { LangSwitcher } from '@/shared/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

export function Navbar() {
    const { t } = useTranslation()

    return (
        <nav className={classNames(classes.navbar, ['content-container'])}>
            <input type="text" placeholder='Type to search...' />
            <div className={classes.buttons}>
                <Button>
                    {t('goPremium')}
                </Button>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </nav>
    )
}
