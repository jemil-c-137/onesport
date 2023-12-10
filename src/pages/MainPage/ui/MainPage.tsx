import { Link } from 'react-router-dom';
import classes from './MainPage.module.scss';
import type { FC } from 'react';

interface MainPage {
    className?: string;
}

export const MainPage: FC<MainPage> = (props) => {
    const { className } = props;

    return (
        <div>
            MainPage
            <Link to={'/live'}>
                live
            </Link>
        </div>
    );
}