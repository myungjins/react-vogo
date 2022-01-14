import React from "react";
import { Redirect, Route } from "react-router";
import { useUserContext } from "./userContext";

const AuthRoute = ({ auth, ...props }) => {
  const { user } = useUserContext();

  if (auth && !user) {
    return <Redirect to='/user' />;
  } else {
    return <Route {...props} />;
  }
};

export default AuthRoute;
