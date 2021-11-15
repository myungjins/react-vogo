import { WHITE } from "components/shared/common/colors";
import { imgRoutes } from "components/shared/common/images";
import { useEffect, useState } from "react";
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
  background-color: transparent;
  &.change_header {
    background-color: ${WHITE};
  }
`;

const Logo = styled.div`
  display: inline-block;
  width: 90px;
  height: 21px;
  &.change_logo {
    background: url("${imgRoutes.common}/logo_purple.png") no-repeat center/contain;
  }
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
  &.change_search {
    background: url("${imgRoutes.common}/ic_search_black.png") no-repeat center/contain;
  }
`;

const Cart = styled.button`
  width: 27px;
  height: 27px;
  margin-left: 16px;
  background: url("${imgRoutes.common}/ic_cart_white_shadow.png") no-repeat center/contain;
  border: none;
  &.change_cart {
    background: url("${imgRoutes.common}/ic_cart_black.png") no-repeat center/contain;
  }
`;

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <AppHeader className={scrollPosition < 10 ? "" : "change_header"}>
      <Logo className={scrollPosition < 10 ? "" : "change_logo"}></Logo>
      <Btns>
        <Search className={scrollPosition < 10 ? "" : "change_search"}></Search>
        <Cart className={scrollPosition < 10 ? "" : "change_cart"}></Cart>
      </Btns>
    </AppHeader>
  );
};

export default Header;
