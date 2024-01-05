import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'

export function LangSwitcher() {
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en').catch(() => {
            console.warn('langugae change is failed')
        })
    }

    return (
        <Button onClick={() => { changeLanguage() }}>
            {t('changeLanguage')}
        </Button>
    )
}
