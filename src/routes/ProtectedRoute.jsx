import React from "react";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, role }) => {
  const user = useSelector((state) => state.userToken.user);

  if (!user || (role && user.role !== role)) {
    return <Navigate to="/noEntry" />;
  }

  return children;
};

export default ProtectedRoute;
