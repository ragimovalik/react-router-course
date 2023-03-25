import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const isProtected = true;

  if (!isProtected) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h2>Protecter Route</h2>
      <Outlet />
    </>
  );
};

export default AuthRequired;
