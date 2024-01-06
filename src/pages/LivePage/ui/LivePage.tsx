import { useTranslation } from 'react-i18next'

const LivePage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('live')}
        </div>
    )
}

export default LivePage
