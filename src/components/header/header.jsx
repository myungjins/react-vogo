import { imgRoutes } from "components/shared/common/images";
import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  max-width: 720px;
  width: 100%;
  height: 56px;
  padding: 0px 20px;
  background-color: ${(props) => (props.color ? "transparent" : "#ddd")};
`;

const Logo = styled.div`
  display: inline-block;
  width: 90px;
  height: 21px;
  background: url("${imgRoutes.common}/logo_purple.png") no-repeat center/contain;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.button`
  width: 24px;
  height: 24px;
  background: url("${imgRoutes.common}/ic_search_shadow.png") no-repeat center/contain;
  border: none;
`;

const Cart = styled.button`
  width: 27px;
  height: 27px;
  margin-left: 16px;
  background: url("${imgRoutes.common}/ic_cart_white_shadow.png") no-repeat center/contain;
  border: none;
`;

const Header = () => {
  return (
    <AppHeader color={true}>
      <Logo></Logo>
      <Btns>
        <Search></Search>
        <Cart></Cart>
      </Btns>
    </AppHeader>
  );
};

export default Header;
