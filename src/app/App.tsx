import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from '@/widgets/Sidebar/Sidebar';
import { useTheme } from '@/shared/hooks/useTheme';
import { classNames } from '@/shared/lib/classNames';
import { AppRoutes } from '@/app/router';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';

export const App = () => {

    const { theme } = useTheme();

    return (
        <BrowserRouter>
            <main className={classNames('app', [theme])}>
                <Navbar />
                <Sidebar />
                <AppRoutes />
            </main> 
        </BrowserRouter>
    );
}