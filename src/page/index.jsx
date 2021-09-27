import Banner from "components/organism/home/banner";
import Header from "components/header/header";
import React from "react";
import Category from "components/organism/home/category";
import LiveHotDeal from "components/organism/home/liveHotDeal";
import LiveSchedule from "components/organism/home/liveSchedule";
import VogoLook from "components/organism/home/vogoLook";

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
  </>
);

export default Index;
