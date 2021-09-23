import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/thumbnail.style";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { imgRoutes } from "components/shared/common/images";

const Containner = styled.div`
  padding-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 50px;
`;

const Box = styled.div`
  padding-bottom: 20px;
`;

const GoodsPrices = styled(S.GoodsPrices)`
  margin-top: 5px;
  font-size: ${F.Xsmall};
  font-weight: bold;
`;

const Discount = styled(S.Discount)`
  color: ${C.PVOGO};
`;

const Thumbnailguide = () => {
  return (
    <Containner>
      <Content>
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

        <S.ThumbnailWrap>
          <S.ThumbnailBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />

            <S.GoodsBox>
              <S.OptionBox>
                <S.ViewIcon />
                <S.ViewText>123</S.ViewText>
              </S.OptionBox>

              <S.OptionBox>
                <S.ViewIconHeart />
                <S.ViewText>123</S.ViewText>
              </S.OptionBox>
            </S.GoodsBox>
          </S.ThumbnailBox>

          <S.SellerBox>
            <S.Seller>
              <S.SellerProfile
                style={{ backgroundImage: `url(${imgRoutes.thumbnail}/profile_default.png)` }}
              />
              <S.SellerName>셀러이름</S.SellerName>
            </S.Seller>
            <S.SellerTitle>
              [무료배송] 라이브제목 테스트 2줄 라이브제목 보고라이[무료배송] 라이브제목 테스트 2줄
              라이브제목 보고라이브[무료배송] 라이브제목 테스트 2줄 라이브제목 보고라이브브
            </S.SellerTitle>
            <S.Date>2021-03-26 10:44:58</S.Date>
          </S.SellerBox>
        </S.ThumbnailWrap>

        <S.ThumbnailWrap>
          <S.ThumbnailBox>
            <S.Thumbnail style={{ backgroundImage: `url(${imgRoutes.thumbnail}/default.png)` }} />

            <S.GoodsBox>
              <S.OptionBox>
                <S.ViewIcon />
                <S.ViewText>123</S.ViewText>
              </S.OptionBox>

              <S.OptionBox>
                <S.ViewIcon />
                <S.ViewText>123</S.ViewText>
              </S.OptionBox>
            </S.GoodsBox>
          </S.ThumbnailBox>

          <S.SellerBox>
            <S.Seller>
              <S.SellerProfile
                style={{ backgroundImage: `url(${imgRoutes.thumbnail}/profile_default.png)` }}
              />
              <S.SellerName>셀러이름</S.SellerName>
            </S.Seller>
            <S.SellerTitle>
              [무료배송] 라이브제목 테스트 2줄 라이브제목 보고라이[무료배송] 라이브제목 테스트 2줄
              라이브제목 보고라이브[무료배송] 라이브제목 테스트 2줄 라이브제목 보고라이브브
            </S.SellerTitle>
            <GoodsPrices>
              <Discount>33</Discount>
              <S.Price>2,000</S.Price>
              <S.DefaultPrice>1,500</S.DefaultPrice>
            </GoodsPrices>
          </S.SellerBox>
        </S.ThumbnailWrap>
      </Content>

      <Box>
        <S.ThumbnailSmall>
          <S.ThumbnailSmallImg />
          <S.ThumbnailSmallTextBox>
            <S.ThumbnailSmallTitle>옵션도 없고 제품명 1줄</S.ThumbnailSmallTitle>
            <S.ThumbnailSmallOptionBox>
              <S.ThumbnailSmallOption>옵션</S.ThumbnailSmallOption>
              <S.ThumbnailSmallOptionText>라이트퍼플 / M</S.ThumbnailSmallOptionText>
            </S.ThumbnailSmallOptionBox>
            <S.ThumbnailSmallPriceBox>
              <S.ThumbnailSmallPrice>23,000원</S.ThumbnailSmallPrice>
              <S.ThumbnailSmallPrice>2개</S.ThumbnailSmallPrice>
            </S.ThumbnailSmallPriceBox>
          </S.ThumbnailSmallTextBox>
        </S.ThumbnailSmall>
      </Box>

      <Box>
        <S.ThumbnailSmall>
          <S.ThumbnailSmallImg />
          <S.ThumbnailSmallTextBox>
            <S.ThumbnailSmallTitle>옵션도 없고 제품명 1줄</S.ThumbnailSmallTitle>

            <S.ThumbnailSmallPriceBox>
              <S.ThumbnailSmallPrice>23,000원</S.ThumbnailSmallPrice>
              <S.ThumbnailSmallPrice>22개</S.ThumbnailSmallPrice>
            </S.ThumbnailSmallPriceBox>
          </S.ThumbnailSmallTextBox>
        </S.ThumbnailSmall>
      </Box>

      <Box>
        <S.ThumbnailSmall>
          <S.ThumbnailSmallImg />
          <S.ThumbnailSmallTextBox>
            <S.ThumbnailSmallTitle>옵션도 없고 제품명 1줄</S.ThumbnailSmallTitle>

            <S.ThumbnailSmallPriceBox>
              <S.ThumbnailSmallPrice>23,000원</S.ThumbnailSmallPrice>
            </S.ThumbnailSmallPriceBox>
          </S.ThumbnailSmallTextBox>
        </S.ThumbnailSmall>
      </Box>

      <Box>
        <S.ThumbnailSmall>
          <S.ThumbnailSmallImg />
          <S.ThumbnailSmallTextBox>
            <S.ThumbnailSmallTitle>옵션도 없고 제품명 1줄</S.ThumbnailSmallTitle>

            <S.ThumbnailSmallPriceBox>
              <S.ThumbnailSmallPrice>23,000원</S.ThumbnailSmallPrice>
              <S.ThumbnailSmallPrice>2개</S.ThumbnailSmallPrice>
              <S.ThumbnailSmallPriceDel>50,000원</S.ThumbnailSmallPriceDel>
            </S.ThumbnailSmallPriceBox>
          </S.ThumbnailSmallTextBox>
        </S.ThumbnailSmall>
      </Box>

      <Box>
        <S.ThumbnailSmall>
          <S.ThumbnailSmallImg />
          <S.ThumbnailSmallTextBox>
            <S.ThumbnailSmallTitle>옵션도 없고 제품명 1줄</S.ThumbnailSmallTitle>

            <S.ThumbnailSmallPriceBox>
              <S.ThumbnailSmallPriceDiscount>43</S.ThumbnailSmallPriceDiscount>
              <S.ThumbnailSmallPrice>23,000원</S.ThumbnailSmallPrice>
            </S.ThumbnailSmallPriceBox>
          </S.ThumbnailSmallTextBox>
        </S.ThumbnailSmall>
      </Box>
    </Containner>
  );
};

export default Thumbnailguide;
