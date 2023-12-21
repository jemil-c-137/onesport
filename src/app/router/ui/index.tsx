import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'

export default function AppRoutes() {
    return (
        <Routes>
            {Object.values(routerConfig).map(route => (
            <Route key={route.path} path={route.path} element={
                <Suspense fallback={<div>Loading</div>}>
                    {route.element}
                </Suspense>}
            />
            ))}
        </Routes>
    )
}
