import { ErrorPage } from "@/pages/ErrorPage"
import { LivePage } from "@/pages/LivePage"
import { MainPage } from "@/pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = "main",
    LIVE = "live",
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LIVE]: '/live',
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    [AppRoutes.LIVE]: {
        path: RouterPaths.live,
        element: <LivePage />,
        errorElement: <ErrorPage />
    }
}