import { useTranslation } from 'react-i18next';


const MainPage = () => {

    const { t } = useTranslation();

    return (
        <div className='content-container'>
            {t('mainPageHeading')}
        </div>
    );
}

export default MainPage;