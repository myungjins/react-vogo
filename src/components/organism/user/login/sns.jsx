import * as C from "components/shared/common/colors";
import React from "react";
import styled, { css } from "styled-components";
import { SMALL } from "components/shared/common/fontSize";
import { imgRoutes } from "components/shared/common/images";
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";
import AppleLogin from "react-apple-login";
import { Link } from "react-router-dom";

const snsComm = css`
  width: 50px !important;
  height: 50px !important;
  margin: 24px 0 !important;
  border-radius: 50% !important;
  background-size: 50px !important;
  font-size: 0 !important;
  text-indent: -99999px;
  cursor: pointer;
`;

const Banner = styled.div`
  position: relative;
  height: 98px;
  margin: 50px -16px 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SnsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const SnsList = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const KaKaoBtn = styled(KakaoLogin)`
  ${snsComm}
  background-image: url("${imgRoutes.common}/ic_sns_kakao.png");
`;

const NaverBtn = styled.div`
  ${snsComm}
  background-image: url("${imgRoutes.common}/ic_sns_naver.png");
`;

const AppleBtn = styled.div`
  ${snsComm}
  background-image: url("${imgRoutes.common}/ic_sns_apple.png");
`;

const GoogleBtn = styled(GoogleLogin)`
  ${snsComm}
  background-image: url("${imgRoutes.common}/ic_sns_google.png");
  opacity: 1 !important;
  border: none !important;
  box-shadow: 0 0 0 transparent !important;
  div {
    padding: 0 0 !important;
    margin: 0 0 !important;
    background: none !important;
    border-radius: 0px !important;
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  width: 185px;
  padding: 6px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: ${SMALL};
  color: ${C.G858F9C};
  letter-spacing: -0.4px;
  background-color: #fff;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    border-width: 7px;
    border-style: solid;
    border-color: #e6e6e6 transparent transparent transparent;
    clear: both;
  }
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
`;

const SpeechBubbleAcive = styled.span`
  font-weight: bold;
  color: ${C.G343A40};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${C.G4A5561};
`;

const Find = styled.div`
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 8px;
    background-color: ${C.GCCD4D8};
  }
`;

const FindId = styled(Link)`
  &::after {
    content: "/";
    margin: 0 3px;
  }
  cursor: pointer;
`;

const FindPass = styled(Link)`
  cursor: pointer;
`;

const SignUp = styled.span`
  cursor: pointer;
`;

const token = "f6e9068b399becf0b3ccc722f8cbab54";
const responseGoogle = (response: any) => {
  console.log(response);
};

const Sns = () => {
  return (
    <>
      <Banner
        style={{
          backgroundImage: `url(${imgRoutes.thumbnail}/product_default.png)`,
        }}
      />

      <SnsBox>
        <SnsList>
          <AppleLogin render={(props) => <AppleBtn />} />
        </SnsList>

        <SnsList>
          <KaKaoBtn //
            token={token}
            onSucces={console.log}
            onFail={console.log}
            onLogout={console.log}
          />
          <SpeechBubble>
            ⚡️카카오로 &nbsp;
            <SpeechBubbleAcive>3초만에</SpeechBubbleAcive> 가입하기
          </SpeechBubble>
        </SnsList>

        <SnsList>
          <NaverBtn />
        </SnsList>

        <SnsList>
          <GoogleBtn
            clientId='180088215739-nuc8nqk5l6fogehglisobaptje73eb1e.apps.googleusercontent.com'
            buttonText='GoogleLogin'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </SnsList>
      </SnsBox>

      <Info>
        <Find>
          <FindId to={"#"}>아이디</FindId>
          <FindPass to={"#"}>비밀번호 찾기</FindPass>
        </Find>
        <SignUp>회원가입</SignUp>
      </Info>
    </>
  );
};

export default Sns;
