import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import { imgRoutes } from "components/shared/common/images";
import { GF1F3F5 } from "components/shared/common/colors";
import * as G from "components/shared/styles/goods.style";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 26px;
  border-bottom: 8px solid ${GF1F3F5};
`;

const Content = styled.div`
  overflow: auto hidden;
  display: flex;
  white-space: nowrap;
  position: relative;
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

const LiveHotDeal = () => {
  return (
    <Container>
      <G.MainTitle>
        <G.TitleTxt>LIVE 핫딜</G.TitleTxt>
      </G.MainTitle>
      <Content>
        <ThumbnailWrap>
          <ThumbnailBox>
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
          </ThumbnailBox>
          <S.SellerBox>
            <S.Seller>provider_name</S.Seller>
            <S.SellerTitle>
              titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
            </S.SellerTitle>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <ThumbnailBox>
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
          </ThumbnailBox>
          <S.SellerBox>
            <S.Seller>provider_name</S.Seller>
            <S.SellerTitle>
              [무료배송] 라이브제목 테스트 2줄 라이브제목 보고라이브[무료배송] 라이브제목 테스트 2줄
              라이브제목 보고라이브
            </S.SellerTitle>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <ThumbnailBox>
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
          </ThumbnailBox>
          <S.SellerBox>
            <S.Seller>provider_name</S.Seller>
            <S.SellerTitle>title</S.SellerTitle>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <ThumbnailBox>
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
          </ThumbnailBox>
          <S.SellerBox>
            <S.Seller>provider_name</S.Seller>
            <S.SellerTitle>title</S.SellerTitle>
          </S.SellerBox>
        </ThumbnailWrap>
      </Content>
    </Container>
  );
};

export default LiveHotDeal;
