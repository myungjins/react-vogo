import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import * as G from "components/shared/styles/goods.style";
import { GF1F3F5 } from "components/shared/common/colors";
import { imgRoutes } from "components/shared/common/images";

const CategoryItem = styled.div`
  width: 100%;
  height: auto;
  &:not(:last-of-type)&::after {
    content: "";
    display: block;
    height: 8px;
    margin: 0 -16px;
    background-color: ${GF1F3F5};
  }
`;

const MainTitle = styled(G.MainTitle)`
  padding-bottom: 0;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 26px;
`;

const ThumbnailWrap = styled(S.ThumbnailWrap)`
  margin-top: 20px;
`;

const CategoryGoodsDetail = () => {
  const [categoryGoods, setcategoryGoods] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "SCOUTER=xkhvir0ta5f1e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://devapi.vogoplay.com/api/main/category?Key=AIzaSyCkr0UI65tFw4YmpfHl9bPPwbS4Ae6I4zA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setcategoryGoods(result))
      .catch((error) => console.log("error", error));
  }, []);

  const comma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {categoryGoods.length !== 0 &&
        categoryGoods.data.map(
          (item, index) =>
            item.livecastList.length !== 0 && (
              <CategoryItem key={item.categorySeq}>
                <MainTitle>
                  <G.TitleTxt>{item.categoryName}</G.TitleTxt>
                  <G.Btn>더보기</G.Btn>
                </MainTitle>
                <Content>
                  {categoryGoods.data[index].livecastList.map((item) => (
                    <ThumbnailWrap key={item.livecastSeq}>
                      <S.ThumbnailSmallBox>
                        <S.Thumbnail
                          style={{
                            backgroundImage: `url(${item.imgPath}), url(${imgRoutes.thumbnail}/default.png)`,
                          }}
                        />

                        <S.Option>
                          <S.LiveBox>
                            <S.LiveViewerBox>
                              <S.LiveViewerSmall />
                              <S.LiveViewerNumSmall>
                                {item.watchCnt}
                              </S.LiveViewerNumSmall>
                            </S.LiveViewerBox>
                          </S.LiveBox>
                          <S.TimeSmall>{item.vodTime}</S.TimeSmall>
                        </S.Option>
                        <S.GoodsBox>
                          <S.GoodsInfo2>
                            <S.GoodsNameSmall>
                              {item.goods[0].goodsName}
                            </S.GoodsNameSmall>
                            <S.GoodsPrices>
                              <S.Discount>
                                {Math.floor(
                                  100 -
                                    (item.goods[0].price * 100) /
                                      item.goods[0].marketPrice
                                )}
                              </S.Discount>
                              <S.Price>{comma(item.goods[0].price)}</S.Price>
                            </S.GoodsPrices>
                          </S.GoodsInfo2>
                        </S.GoodsBox>
                      </S.ThumbnailSmallBox>

                      <S.SellerBox>
                        <S.SellerSmall>{item.providerName}</S.SellerSmall>
                        <S.SellerTitleSmall>{item.title}</S.SellerTitleSmall>
                      </S.SellerBox>
                    </ThumbnailWrap>
                  ))}
                </Content>
              </CategoryItem>
            )
        )}
    </>
  );
};

export default CategoryGoodsDetail;
