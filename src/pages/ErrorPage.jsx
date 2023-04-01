import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-900 text-white/90">
      <div className="bg"></div>
      <h1>Oops!</h1>
      <p>An unexpected error has occured.</p>
      <p>
        {error.status} {error.statusText || error.message}
      </p>
    </div>
  );
}
