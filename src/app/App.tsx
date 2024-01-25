import { BrowserRouter } from 'react-router-dom'

import { Sidebar } from '@/widgets/Sidebar'
import { useTheme } from '@/shared/hooks/useTheme'
import { classNames } from '@/shared/lib/classNames'
import { AppRoutes } from '@/app/router'
import { Navbar } from '@/widgets/Navbar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export const App = () => {
    const { t } = useTranslation()

    const { theme } = useTheme()

    return (
        <BrowserRouter>
            <Suspense fallback={<div>{t('loading')}</div>}>
                <main className={classNames('app', [theme])}>
                    <Navbar />
                    <Sidebar />
                    <AppRoutes />
                </main>
            </Suspense>
        </BrowserRouter>
    )
}
