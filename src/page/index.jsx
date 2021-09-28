import Banner from "components/organism/home/banner";
import Header from "components/header/header";
import React from "react";
import LiveHotDeal from "components/organism/home/liveHotDeal";
import LiveSchedule from "components/organism/home/liveSchedule";
import VogoLook from "components/organism/home/vogoLook";
import CategoryGoodsDetail from "components/organism/home/categoryGoodsDetail";
import Footer from "components/footer/footer";
import Tabbar from "components/tab/tabbar";

const Index = (props) => (
  <>
    <Header />
    <Banner />
    <LiveHotDeal />
    <LiveSchedule />
    <VogoLook />
    <CategoryGoodsDetail />
    <Footer />
    <Tabbar />
  </>
);

export default Index;
