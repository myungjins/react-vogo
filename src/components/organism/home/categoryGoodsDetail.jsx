import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import { imgRoutes } from "components/shared/common/images";
import * as G from "components/shared/styles/goods.style";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 26px;
`;

const MainTitle = styled(G.MainTitle)`
  padding-bottom: 0;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ThumbnailWrap = styled(S.ThumbnailWrap)`
  margin-top: 20px;
`;

const CategoryGoodsDetail = () => {
  return (
    <Container>
      <MainTitle>
        <G.TitleTxt>식품</G.TitleTxt>
        <G.Btn>더보기</G.Btn>
      </MainTitle>
      <Content>
        <ThumbnailWrap>
          <S.ThumbnailSmallBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />
            <S.Option>
              <S.LiveBox>
                <S.LiveViewerBox>
                  <S.LiveViewerSmall />
                  <S.LiveViewerNumSmall>3</S.LiveViewerNumSmall>
                </S.LiveViewerBox>
              </S.LiveBox>
              <S.TimeSmall>00:00:00</S.TimeSmall>
            </S.Option>

            <S.GoodsBox>
              <S.GoodsInfo2>
                <S.GoodsNameSmall>쫄깃쫄깃 구워먹는 앙금절편 / 치즈절편 (옵션 O)</S.GoodsNameSmall>
                <S.GoodsPrices>
                  <S.Discount>33</S.Discount>
                  <S.Price>2,000</S.Price>
                </S.GoodsPrices>
              </S.GoodsInfo2>
            </S.GoodsBox>
          </S.ThumbnailSmallBox>

          <S.SellerBox>
            <S.SellerSmall>provider_name</S.SellerSmall>
            <S.SellerTitleSmall>title</S.SellerTitleSmall>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <S.ThumbnailSmallBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />
            <S.Option>
              <S.LiveBox>
                <S.LiveViewerBox>
                  <S.LiveViewerSmall />
                  <S.LiveViewerNumSmall>3</S.LiveViewerNumSmall>
                </S.LiveViewerBox>
              </S.LiveBox>
              <S.TimeSmall>00:00:00</S.TimeSmall>
            </S.Option>

            <S.GoodsBox>
              <S.GoodsInfo2>
                <S.GoodsNameSmall>쫄깃쫄깃 구워먹는 앙금절편 / 치즈절편 (옵션 O)</S.GoodsNameSmall>
                <S.GoodsPrices>
                  <S.Discount>33</S.Discount>
                  <S.Price>2,000</S.Price>
                </S.GoodsPrices>
              </S.GoodsInfo2>
            </S.GoodsBox>
          </S.ThumbnailSmallBox>

          <S.SellerBox>
            <S.SellerSmall>provider_name</S.SellerSmall>
            <S.SellerTitleSmall>title</S.SellerTitleSmall>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <S.ThumbnailSmallBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />
            <S.Option>
              <S.LiveBox>
                <S.LiveViewerBox>
                  <S.LiveViewerSmall />
                  <S.LiveViewerNumSmall>3</S.LiveViewerNumSmall>
                </S.LiveViewerBox>
              </S.LiveBox>
              <S.TimeSmall>00:00:00</S.TimeSmall>
            </S.Option>

            <S.GoodsBox>
              <S.GoodsInfo2>
                <S.GoodsNameSmall>쫄깃쫄깃 구워먹는 앙금절편 / 치즈절편 (옵션 O)</S.GoodsNameSmall>
                <S.GoodsPrices>
                  <S.Discount>33</S.Discount>
                  <S.Price>2,000</S.Price>
                </S.GoodsPrices>
              </S.GoodsInfo2>
            </S.GoodsBox>
          </S.ThumbnailSmallBox>

          <S.SellerBox>
            <S.SellerSmall>provider_name</S.SellerSmall>
            <S.SellerTitleSmall>title</S.SellerTitleSmall>
          </S.SellerBox>
        </ThumbnailWrap>
        <ThumbnailWrap>
          <S.ThumbnailSmallBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />
            <S.Option>
              <S.LiveBox>
                <S.LiveViewerBox>
                  <S.LiveViewerSmall />
                  <S.LiveViewerNumSmall>3</S.LiveViewerNumSmall>
                </S.LiveViewerBox>
              </S.LiveBox>
              <S.TimeSmall>00:00:00</S.TimeSmall>
            </S.Option>

            <S.GoodsBox>
              <S.GoodsInfo2>
                <S.GoodsNameSmall>쫄깃쫄깃 구워먹는 앙금절편 / 치즈절편 (옵션 O)</S.GoodsNameSmall>
                <S.GoodsPrices>
                  <S.Discount>33</S.Discount>
                  <S.Price>2,000</S.Price>
                </S.GoodsPrices>
              </S.GoodsInfo2>
            </S.GoodsBox>
          </S.ThumbnailSmallBox>

          <S.SellerBox>
            <S.SellerSmall>provider_name</S.SellerSmall>
            <S.SellerTitleSmall>title</S.SellerTitleSmall>
          </S.SellerBox>
        </ThumbnailWrap>
      </Content>
    </Container>
  );
};

export default CategoryGoodsDetail;
