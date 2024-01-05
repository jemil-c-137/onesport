import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'

import { App } from '@/app/App'
import { ThemeProvider } from '@/shared/context/theme/ThemeProvider'

// import i18n (needs to be bundled ;))
import './app/config/i18n/i18n'

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<ThemeProvider>
    <App />
</ThemeProvider>)
