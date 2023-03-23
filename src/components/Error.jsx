import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Error Happened</h1>
      <p>
        {error.message} - {error.statusText}{" "}
      </p>
    </>
  );
};

export default Error;
