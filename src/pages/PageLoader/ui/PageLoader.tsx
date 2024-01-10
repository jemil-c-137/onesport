import { Loader } from '@/shared/ui/Loader/Loader'
import classes from './PageLoader.module.scss'

export function PageLoader() {
    return (
        <div className={classes.pageLoader}>
            <Loader />
        </div>
    )
}
