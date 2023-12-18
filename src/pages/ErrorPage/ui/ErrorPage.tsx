import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    const message = () => {
        return isRouteErrorResponse(error) 
            ?  error.statusText || error.statusText 
            : 'Unknown error 🗿'
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{message()}</i>
                </p>
        </div>
    );
}