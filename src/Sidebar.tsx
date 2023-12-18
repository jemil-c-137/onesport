import { Link } from "react-router-dom";


export const Sidebar = () => {


    return (
        <div>
            <h1>Onesport</h1>

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