import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { imgRoutes } from "components/shared/common/images";

const FooterWrap = styled.footer`
  margin: 0 -16px;
  padding: 23px 16px 32px;
  background-color: ${C.GF8F9FA};
`;

const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Vogo = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.G343A40};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${C.G858F9C};
`;

const CheckBox = styled.div`
  margin-bottom: 16px;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
const Check = styled.button`
  color: ${C.G4A5561};
  &:not(:last-child) {
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
      height: 12px;
      margin: 0 12px;
      background-color: #d8d8d8;
    }
  }
`;

const InfoBox = styled.div`
  display: ${(props) => (props.displays ? "block" : "none")};
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  align-content: flex-start;
  font-size: ${F.Xsmall};
  line-height: 18px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Title = styled.span`
  min-width: 90px;
  color: ${C.G858F9C};
`;

const Texts = styled.div`
  color: ${C.G4A5561};
`;

const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

const Content = styled.p`
  font-size: ${F.Xsmall};
  color: ${C.G858F9C};
  line-height: 18px;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 20px 0 16px;
  font-size: ${F.Xsmall};
  color: ${C.G858F9C};
  line-height: 18px;
  text-align: center;
`;

const Logo = styled.i`
  display: block;
  width: 70px;
  height: 17px;
  margin: 0 auto;
  background: url("${imgRoutes.common}/logo_gray.png") no-repeat center/cover;
`;

const LinkNumber = styled.a``;

const LinkIcon = styled.i`
  width: 24px;
  height: 24px;
  background: url("${imgRoutes.common}/ic_arrow_down_gray_2.png") no-repeat center/contain;
  transform: rotate(${(props) => (props.displays ? "180deg" : "0")});
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Top>
        <Vogo>보고플레이(주)</Vogo>
        <Button>
          더보기
          <LinkIcon displays={false} />
        </Button>
      </Top>

      <CheckBox>
        <CheckItem>
          <Check>사업자정보 확인</Check>
          <Check>이용약관</Check>
        </CheckItem>

        <CheckItem>
          <Check>판매자 이용약관</Check>
          <Check>개인정보 처리방침</Check>
        </CheckItem>
      </CheckBox>

      <InfoBox displays={false}>
        <Info>
          <Title>대표자</Title>
          <Texts>류승태</Texts>
        </Info>

        <Info>
          <Title>주소</Title>
          <Texts>
            서울특별시 강남구 테헤란로2길 27, 1320호
            <br />
            (역삼동,비젼타워) (우)06241
          </Texts>
        </Info>

        <Info>
          <Title>고객센터</Title>
          <Texts>
            <Text>
              <LinkNumber href='tel:1661-0493'>1661-0493</LinkNumber>
            </Text>
            <Text>월-금 10:00 – 17:00</Text>
            <Text>점심시간 12:00 – 13:00</Text>
            <Text>주말, 공휴일 휴무</Text>
          </Texts>
        </Info>

        <Info>
          <Title>이메일주소</Title>
          <Texts>vogo@vogoplay.com</Texts>
        </Info>

        <Info>
          <Title>사업자등록번호</Title>
          <Texts>457-87-01531</Texts>
        </Info>

        <Info>
          <Title>통신판매번호</Title>
          <Texts>2019-서울강남-04527</Texts>
        </Info>
      </InfoBox>

      <Content>
        보고플레이(주)는 통신판매중개자이며 통신판매의 당사자가 아닙니다. <br />
        상품, 상품정보 및 거래에 관한 의무와 책임은 판매자에게 있습니다.
      </Content>

      <Copyright>Copyright : VOGOPLAY. All right Reserved.</Copyright>

      <Logo />
    </FooterWrap>
  );
};

export default Footer;
