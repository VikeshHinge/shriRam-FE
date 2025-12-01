import React from "react";
import { Navigate, type ReactNode } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
