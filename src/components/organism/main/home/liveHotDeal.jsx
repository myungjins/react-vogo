import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import { GF1F3F5 } from "components/shared/common/colors";
import * as G from "components/shared/styles/goods.style";
import { imgRoutes } from "components/shared/common/images";

const Container = styled.div`
  width: 100%;
  height: auto;
  &::after {
    content: "";
    display: block;
    height: 8px;
    margin: 0 -16px;
    background-color: ${GF1F3F5};
  }
`;

const Content = styled.div`
  overflow: auto hidden;
  display: flex;
  white-space: nowrap;
  position: relative;
  padding-bottom: 26px;
`;

const ThumbnailWrap = styled(S.ThumbnailWrap)`
  flex: 0 0 240px;
  max-width: 240px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const ThumbnailBox = styled(S.ThumbnailBox)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 360px;
  padding: 10px 8px 8px;
  border-radius: 4px;
`;

const LiveHotDeal = memo(() => {
  const [livehotdeal, setLiveHotDeal] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "SCOUTER=xkhvir0ta5f1e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://devapi.vogoplay.com/api/main/hot_deal?Key=AIzaSyCkr0UI65tFw4YmpfHl9bPPwbS4Ae6I4zA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setLiveHotDeal(result))
      .catch((error) => console.log("error", error));
  }, []);

  const discount = (price, marketPrice) => {
    return Math.floor(100 - (price * 100) / marketPrice);
  };

  const time = (watchCnt) => {
    return watchCnt.substring(3);
  };

  return (
    <div>
      {livehotdeal.length !== 0 && (
        <Container>
          <G.MainTitle>
            <G.TitleTxt>LIVE 핫딜</G.TitleTxt>
          </G.MainTitle>
          <Content>
            {livehotdeal.data.list.map((item) => (
              <ThumbnailWrap key={item.livecastSeq}>
                <ThumbnailBox>
                  <S.Thumbnail
                    style={{
                      backgroundImage: `url(${item.imgPath}), url(${imgRoutes.thumbnail}/default.png)`,
                    }}
                  />
                  <S.Option>
                    <S.LiveBox>
                      <S.Live />
                      <S.LiveViewerBox>
                        <S.LiveViewer />
                        <S.LiveViewerNum>{item.watchCnt}</S.LiveViewerNum>
                      </S.LiveViewerBox>
                    </S.LiveBox>
                    {/* <S.Time>{item.vodTime}</S.Time> */}
                    <S.Time>{time(item.vodTime)}</S.Time>
                  </S.Option>
                  <S.GoodsBox>
                    {item.goods[0].image !== null && (
                      <S.GoodsThumbnail
                        style={{
                          backgroundImage: `url(${item.goods[0].image}), url(${imgRoutes.thumbnail}/product_default.png)`,
                        }}
                      />
                    )}
                    {console.log(item.goods[0])}
                    <S.GoodsInfo>
                      <S.GoodsName>{item.goods[0].goodsName}</S.GoodsName>
                      <S.GoodsPrices>
                        {discount(item.goods[0].price, item.goods[0].marketPrice) !== null &&
                          discount(item.goods[0].price, item.goods[0].marketPrice) > 0 && (
                            <S.Discount>
                              {discount(item.goods[0].price, item.goods[0].marketPrice)}
                            </S.Discount>
                          )}

                        {item.goods[0].price !== null && <S.Price>{item.goods[0].price}</S.Price>}
                      </S.GoodsPrices>
                    </S.GoodsInfo>
                  </S.GoodsBox>
                </ThumbnailBox>
                <S.SellerBox>
                  <S.Seller>{item.providerName}</S.Seller>
                  <S.SellerTitle>{item.title}</S.SellerTitle>
                </S.SellerBox>
              </ThumbnailWrap>
            ))}
          </Content>
        </Container>
      )}
    </div>
  );
});

export default LiveHotDeal;
