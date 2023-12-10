import classes from './LivePage.module.scss';
import type { FC } from 'react';

interface LivePageProps {
    className?: string;
}

export const LivePage: FC<LivePageProps> = (props) => {
    const { className } = props;

    return (
        <div>
            LivePage
        </div>
    );
}