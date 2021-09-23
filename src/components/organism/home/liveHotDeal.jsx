import React from "react";
import * as S from "components/shared/styles/thumbnail.style";
import { imgRoutes } from "components/shared/common/images";

const LiveHotDeal = () => {
  return (
    <>
      <div>
        <S.ThumbnailWrap>
          <S.ThumbnailBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />
            <S.Option>
              <S.LiveBox>
                <S.Live />
                <S.LiveViewerBox>
                  <S.LiveViewer />
                  <S.LiveViewerNum>3</S.LiveViewerNum>
                </S.LiveViewerBox>
              </S.LiveBox>

              <S.Time>00:00:00</S.Time>
            </S.Option>

            <S.GoodsBox>
              <S.GoodsThumbnail
                style={{ backgroundImage: `url(${imgRoutes.thumbnail}/profile_default.png)` }}
              />
              <S.GoodsInfo>
                <S.GoodsName>쫄깃쫄깃 구워먹는 앙금절편 / 치즈절편 (옵션 O)</S.GoodsName>
                <S.GoodsPrices>
                  <S.Discount>33</S.Discount>
                  <S.Price>2,000</S.Price>
                </S.GoodsPrices>
              </S.GoodsInfo>
            </S.GoodsBox>
          </S.ThumbnailBox>

          <S.SellerBox>
            <S.Seller>provider_name</S.Seller>
            <S.SellerTitle>title</S.SellerTitle>
          </S.SellerBox>
        </S.ThumbnailWrap>
      </div>
    </>
  );
};

export default LiveHotDeal;
