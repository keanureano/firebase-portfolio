import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1>Oops!</h1>
      <p>An unexpected error has occured.</p>
      <p>
        {error.status} {error.statusText || error.message}
      </p>
    </div>
  );
}
