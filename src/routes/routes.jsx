import Thumbnailguide from "components/shared/guide/thumbnail.guide";
import React from "react";
import { Route } from "react-router";
import Index from "../page";

const Routes = () => {
  return (
    <>
      {/* home */}
      <Route path='/' component={Index} exact={true} />

      {/* guide */}
      <Route path='/guide/thumbnail' component={Thumbnailguide} exact={true} />
    </>
  );
};

export default Routes;
