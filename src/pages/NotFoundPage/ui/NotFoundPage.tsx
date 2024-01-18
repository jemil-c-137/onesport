import { useTranslation } from 'react-i18next'
import ZlatanImage from '@/shared/assets/images/zlatan.webp'
import classes from './NotFoundPage.module.scss'

export default function NotFoundPage() {
    const { t } = useTranslation()

    return (
        <div className={classes.notFoundPage} id="error-page">
            <h2>{t('oops')}</h2>
            <p>{t('pageNotFound')}</p>
            <img src={ZlatanImage} alt="" />
        </div>
    )
}
