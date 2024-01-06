import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const { t } = useTranslation()
    const error = useRouteError()

    const message = (): string => {
        return isRouteErrorResponse(error)
            ? error.statusText
            : 'Unknown error 🗿'
    }

    return (
        <div id="error-page">
            <h1>{t('oops')}</h1>
            <p>{t('unexpectedError')}</p>
            <p>
                <i>{message()}</i>
            </p>
        </div>
    )
}
