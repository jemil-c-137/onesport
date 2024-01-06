import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'
import { useTranslation } from 'react-i18next'

export default function AppRoutes() {
    const { t } = useTranslation()
    return (
        <Routes>
            {Object.values(routerConfig).map(route => (
                <Route key={route.path} path={route.path} element={
                    <Suspense fallback={<div>{t('loading')}</div>}>
                        {route.element}
                    </Suspense>}
                />
            ))}
        </Routes>
    )
}
