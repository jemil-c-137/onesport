import { createRoot } from 'react-dom/client';
import './style.scss';

import { App } from './App';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);