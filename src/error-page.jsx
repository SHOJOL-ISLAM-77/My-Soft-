import { Link, useRouteError } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex h-screen justify-center items-center flex-col gap-5">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="flex flex-col items-center gap-5">
                <i className="text-5xl">{error.status || error.message}</i>
                <i className="text-5xl">{error.statusText || error.message}</i>
            </p>
            <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
            
            <Link to="/"><Button variant="outlined">Go Home</Button></Link>
        </div>
    );
}