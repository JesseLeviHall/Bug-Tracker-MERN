import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../../Hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <p className="mt-5 text-center">loading...</p>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/user/login" />;
};

export default PrivateRoute;
