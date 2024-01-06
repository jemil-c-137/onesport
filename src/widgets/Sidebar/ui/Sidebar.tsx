import { NavLink } from 'react-router-dom'
import Logo from '@/shared/assets/icons/logo.svg'

import classes from './Sidebar.module.scss'
import { classNames } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'

export function Sidebar() {
    const { t } = useTranslation()

    return (
        <div className={classNames(classes.sidebar, ['content-container'])}>
            <h1><Logo />{t('appName')}</h1>

            <p className={classes.menu}>{t('menu')}</p>
            <ul>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => classNames({ [classes.active]: isActive })}>
                        {t('dashboard')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/live'} className={({ isActive }) => classNames({ [classes.active]: isActive })}>
                        {t('live')}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
