import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'
import classes from './Button.module.scss'

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button data-testid="button" {...props} className={classes.button}>
            { children }
        </button>
    )
}
