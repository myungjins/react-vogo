import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { imgRoutes } from "components/shared/common/images";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0px;
`;

export const TitleTxt = styled.h1`
  font-size: ${F.LARGE};
  color: ${C.CPRIMARY};
  font-weight: bold;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  font-size: ${F.SPRIMARY};
  color: ${C.G343A40};
  font-weight: 400;
  &::after {
    content: "";
    display: inline-block;
    width: 18px;
    height: 24px;
    background: url("${imgRoutes.common}/ic_arrow_black.png");
  }
`;

const Category = () => {
  return (
    <>
      <Title>
        <TitleTxt>LIVE 핫딜</TitleTxt>
        <Btn>더보기</Btn>
      </Title>
    </>
  );
};

export default Category;
