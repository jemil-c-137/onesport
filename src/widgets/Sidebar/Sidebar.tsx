import { Link } from "react-router-dom";


export function Sidebar() {

    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to={'/live'}>
                        Live
                    </Link>
                </li>
            </ul>
        </div>
    );
}