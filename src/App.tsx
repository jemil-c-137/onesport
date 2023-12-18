import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { LivePage } from './pages/LivePage';
import { Suspense } from 'react';
import { Sidebar } from './Sidebar';



export const App = () => {

    return (
        <BrowserRouter>
            <main>
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