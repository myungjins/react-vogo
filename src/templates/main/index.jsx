import React from "react";
import Banner from "components/organism/main/home/banner";
import LiveHotDeal from "components/organism/main/home/liveHotDeal";
import LiveSchedule from "components/organism/main/home/liveSchedule";
import VogoLook from "components/organism/main/home/vogoLook";
import CategoryGoodsDetail from "components/organism/main/home/categoryGoodsDetail";

const MainTemplate = () => {
  return (
    <>
      <Banner />
      <LiveHotDeal />
      <LiveSchedule />
      <VogoLook />
      <CategoryGoodsDetail />
    </>
  );
};

export default MainTemplate;
