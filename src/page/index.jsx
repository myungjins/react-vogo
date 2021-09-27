import Banner from "components/organism/home/banner";
import Header from "components/header/header";
import React from "react";
import Category from "components/organism/home/category";
import LiveHotDeal from "components/organism/home/liveHotDeal";
import LiveSchedule from "components/organism/home/liveSchedule";
import VogoLook from "components/organism/home/vogoLook";
import CategoryGoodsDetail from "components/organism/home/categoryGoodsDetail";

const Index = (props) => (
  <>
    <Header />
    <Banner />
    <Category />
    <LiveHotDeal />
    <Category />
    <LiveSchedule />
    <Category />
    <VogoLook />
    <Category />
    <CategoryGoodsDetail />
  </>
);

export default Index;
