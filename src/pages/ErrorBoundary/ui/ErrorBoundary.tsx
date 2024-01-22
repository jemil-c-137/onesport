import { Component, type ErrorInfo, type ReactNode } from 'react'
import { type WithTranslation, withTranslation } from 'react-i18next'
import classes from './ErrorBoundary.module.scss'

interface Props extends WithTranslation {
    children?: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return <div className={classes.errorBoundary}>
                <h1>{this.props.t('unknownError')}</h1>
            </div>
        }

        return this.props.children
    }
}

export default withTranslation()(ErrorBoundary)
