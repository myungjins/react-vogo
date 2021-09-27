import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import { GF1F3F5 } from "components/shared/common/colors";
import { imgRoutes } from "components/shared/common/images";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-bottom: 8px solid ${GF1F3F5};
  flex-wrap: wrap;
`;

const ThumbnailWrap = styled(S.ThumbnailWrap)`
  margin-top: 20px;
`;

const CategoryGoodsDetail = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default CategoryGoodsDetail;
