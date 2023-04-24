import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Error Happened</h1>
      <p>Error handling component</p>
      <p>
        {error.message} - {error.statusText}{" "}
      </p>
    </>
  );
};

export default Error;
