import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "store/authRoute";

import Main from "page/main";
import Category from "page/main/category";

import User from "page/user";

import Feed from "page/feed";

import NewYear from "page/event/newYear";

import GoodsGuide from "components/shared/guide/goods.guide";
import FormGuide from "components/shared/guide/form.guide";
import ModalGuide from "components/shared/guide/modal.guide";
import ButtonGuide from "components/shared/guide/button.guide";
import Thumbnailguide from "components/shared/guide/thumbnail.guide";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* home */}
        <AuthRoute path='/' exact component={Main} />
        <AuthRoute path='/category' component={Category} />
        <AuthRoute path='/feed' component={Feed} />

        {/* user */}
        <AuthRoute path='/user' component={User} />

        {/* exhibition 기획전 */}
        <AuthRoute path='/newYear' component={NewYear} />

        {/* guide */}
        <AuthRoute path='/guide/thumbnail' exact component={Thumbnailguide} />
        <AuthRoute path='/guide/goods' component={GoodsGuide} />
        <AuthRoute path='/guide/button' component={ButtonGuide} />
        <AuthRoute path='/guide/form' component={FormGuide} />
        <AuthRoute path='/guide/modal' component={ModalGuide} />
      </Switch>
    </Router>
  );
};

export default Routes;
