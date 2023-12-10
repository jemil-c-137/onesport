import { createRoot } from 'react-dom/client';
import './style.scss';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { LivePage } from './pages/LivePage';
import ErrorPage from './pages/ErrorPage/ui/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/live",
        element: <LivePage />,
        errorElement: <ErrorPage />
    },
]);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} />);