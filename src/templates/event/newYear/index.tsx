import React, { memo } from "react";
import Goods from "components/organism/event/newYear/home/goods";
import { IGoodTab } from "page/event/newYear";

interface IProps {
  goodsTab: IGoodTab[];
  setGoodsTab: React.Dispatch<React.SetStateAction<IGoodTab[]>>;
  goodsList: Array<[]>;
}

const NewYearTemplates = memo(({ goodsTab, setGoodsTab, goodsList }: IProps) => {
  return (
    <>
      <Goods goodsTab={goodsTab} setGoodsTab={setGoodsTab} goodsList={goodsList} />
    </>
  );
});

export default NewYearTemplates;
