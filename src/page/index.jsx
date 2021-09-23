import Banner from "components/organism/home/banner";
import Header from "components/header/header";
import React from "react";
import Category from "components/organism/home/category";
import LiveHotDeal from "components/organism/home/liveHotDeal";

const Index = (props) => (
  <>
    <Header />
    <Banner />
    <Category />
    <LiveHotDeal />
  </>
);

export default Index;
