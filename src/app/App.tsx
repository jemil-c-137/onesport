import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from '@/pages/MainPage';
import { LivePage } from '@/pages/LivePage';
import { Sidebar } from '@/widgets/ui/Sidebar';
import { useTheme } from '@/shared/hooks/useTheme';
import { classNames } from '@/shared/lib/classNames';

export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <BrowserRouter>
            <main className={classNames('app', [theme])}>
                <button onClick={() => toggleTheme()} >{theme}</button>
                <Sidebar />
                <Routes>
                    <Route path='/' element={
                        <Suspense fallback={<div>Loading</div>}>
                            <MainPage />
                        </Suspense>}
                    />
                    <Route path='/live' element={
                        <Suspense fallback={<div>Loading</div>}>
                            <LivePage />
                        </Suspense>}
                    />
                </Routes>
            </main> 
        </BrowserRouter>
    );
}