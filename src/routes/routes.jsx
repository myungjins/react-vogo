import React from "react";
import { Route } from "react-router";
import Index from "../page";

const Routes = () => {
  return (
    <>
      <Route path='/' component={Index} exact={true} />
    </>
  );
};

export default Routes;
