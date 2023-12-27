import { PropsWithChildren } from 'react'
import classes from './Button.module.scss';

export function Button({ children }: PropsWithChildren) {
    return (
        <button className={classes.button}>
            { children }
        </button>
    )
}
