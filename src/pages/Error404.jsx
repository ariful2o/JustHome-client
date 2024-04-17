import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

export default function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-44">
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Link to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </p>
    </div>
  );
}