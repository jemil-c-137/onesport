import { createRoot } from 'react-dom/client';
import './styles/index.scss'

import { App } from './App';
import { ThemeProvider } from './shared/ui/theme/ThemeProvider';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ThemeProvider>
    <App />
</ThemeProvider>);