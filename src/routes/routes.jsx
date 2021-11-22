import ButtonGuide from "components/shared/guide/button.guide";
import FormGuide from "components/shared/guide/form.guide";
import GoodsGuide from "components/shared/guide/goods.guide";
import Thumbnailguide from "components/shared/guide/thumbnail.guide";
import React from "react";
import { Route } from "react-router";
import Main from "page/main";
import Category from "page/main/category";
import User from "page/user";
import Feed from "page/feed";
import ModalGuide from "components/shared/guide/modal.guide";

const Routes = () => {
  return (
    <>
      {/* home */}
      <Route path='/' component={Main} exact />
      <Route path='/category' component={Category} />
      <Route path='/feed' component={Feed} />

      {/* user */}
      <Route path='/user' component={User} />

      {/* guide */}
      <Route path='/guide/thumbnail' component={Thumbnailguide} exact />
      <Route path='/guide/goods' component={GoodsGuide} />
      <Route path='/guide/button' component={ButtonGuide} />
      <Route path='/guide/form' component={FormGuide} />
      <Route path='/guide/modal' component={ModalGuide} />
    </>
  );
};

export default Routes;
