import { Outlet, Navigate } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Auth Required Component</h1>
      <Outlet />
    </>
  );
};

export default AuthRequired;
