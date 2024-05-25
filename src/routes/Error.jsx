import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mockup-window border bg-base-300">
      <div className="flex justify-center px-4 py-16 bg-base-200 min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-lg font-medium">
            The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-info mt-5">
            Go Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
