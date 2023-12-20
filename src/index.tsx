import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss'

import { App } from '@/app/App';
import { ThemeProvider } from '@/shared/context/theme/ThemeProvider';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ThemeProvider>
    <App />
</ThemeProvider>);