import React from "react";
import { useAuth } from "../Context/authContext";
import { Navigate } from "react-router-dom";
import { userView } from "./userView/UserView";

const ProtectedRouteUser = ({ children }) => {
  const { user, users, loading } = useAuth();

  if (loading) return <h2>Cargando...</h2>;
  if (!user) return <Navigate to="/userView" />;

  const mails = users.map((elem) => {
    return elem.email;
  });

  if (mails.indexOf(user.email) != -1) return <>{children}</>;
  return <userView/>;
};

export default ProtectedRouteUser;