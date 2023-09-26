import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}