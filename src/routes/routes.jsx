import ButtonGuide from "components/shared/guide/button.guide";
import FormGuide from "components/shared/guide/form.guide";
import GoodsGuide from "components/shared/guide/goods.guide";
import Thumbnailguide from "components/shared/guide/thumbnail.guide";
import React from "react";
import { Route } from "react-router";
import Main from "../page/main";

const Routes = () => {
  return (
    <>
      {/* home */}
      <Route path='/' exact component={Main} />

      {/* guide */}
      <Route path='/guide/thumbnail' component={Thumbnailguide} exact={true} />
      <Route path='/guide/goods' component={GoodsGuide} exact={true} />
      <Route path='/guide/button' component={ButtonGuide} exact={true} />
      <Route path='/guide/form' component={FormGuide} exact={true} />
    </>
  );
};

export default Routes;
