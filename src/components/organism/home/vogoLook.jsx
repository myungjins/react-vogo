import React from "react";
import styled from "styled-components";
import * as G from "components/shared/styles/goods.style";
import { GF1F3F5 } from "components/shared/common/colors";
import { imgRoutes } from "components/shared/common/images";

const Container = styled.div`
  overflow: auto hidden;
  display: flex;
  white-space: nowrap;
  margin: 0px -16px;
  padding: 0px 16px 24px;
  border-bottom: 8px solid ${GF1F3F5};
`;

const VogoLook = () => {
  return (
    <>
      <Container>
        <G.VogoItem>
          <G.VogoImgWrap>
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
          </G.VogoImgWrap>
          <G.TxtWrap>
            <G.VTxt>크림멜로우 초코 모찌 마시멜로 VS 칵투스 시나몬 크림 바스켓</G.VTxt>
            <G.VNumber>
              <G.VBold>132</G.VBold>명 참여중
            </G.VNumber>
          </G.TxtWrap>
        </G.VogoItem>
        <G.VogoItem>
          <G.VogoImgWrap>
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
          </G.VogoImgWrap>
          <G.TxtWrap>
            <G.VTxt>크림멜로우 초코 모찌 마시멜로 VS 칵투스 시나몬 크림 바스켓</G.VTxt>
            <G.VNumber>
              <G.VBold>132</G.VBold>명 참여중
            </G.VNumber>
          </G.TxtWrap>
        </G.VogoItem>
        <G.VogoItem>
          <G.VogoImgWrap>
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
          </G.VogoImgWrap>
          <G.TxtWrap>
            <G.VTxt>크림멜로우 초코 모찌 마시멜로 VS 칵투스 시나몬 크림 바스켓</G.VTxt>
            <G.VNumber>
              <G.VBold>132</G.VBold>명 참여중
            </G.VNumber>
          </G.TxtWrap>
        </G.VogoItem>
      </Container>
    </>
  );
};

export default VogoLook;
