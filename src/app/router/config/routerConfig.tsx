import { NotFoundPage } from '@/pages/NotFoundPage'
import { LivePage } from '@/pages/LivePage'
import { MainPage } from '@/pages/MainPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    LIVE = 'live',
    NOT_FOUND = 'notFound'
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LIVE]: '/live',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },
    [AppRoutes.LIVE]: {
        path: RouterPaths.live,
        element: <LivePage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.notFound,
        element: <NotFoundPage />
    }
}
