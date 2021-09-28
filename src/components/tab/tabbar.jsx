import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import { Link } from "react-router-dom";
import { imgRoutes } from "components/shared/common/images";

const STabBar = styled.ul`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: ${C.WHITE};
  border-top: 1px solid #e6e6e6;
`;

const Item = styled.li`
  flex: 1 1 25%;
  pointer-events: ${(props) => (props.actives ? "none" : "auto")};
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 52px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 52px;
`;

const Icon = styled.i`
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const Text = styled.p`
  margin-top: 2px;
  font-size: 9px;
  color: ${(props) => (props.fontColor ? C.G646F7C : C.BLACK)};
  font-weight: ${(props) => (props.fontWeightOption ? "400" : "500")};
  letter-spacing: -0.2px;
  pointer-events: none;
`;

const Tabbar = () => {
  return (
    <STabBar scroll={true}>
      <Item actives={true}>
        <SLink to='/'>
          <Icon style={{ backgroundImage: `url(${imgRoutes.common}/ic_home_thin.png)` }} />
          <Text fontColor={true} fontWeightOption={true}>
            홈
          </Text>
        </SLink>
      </Item>

      <Item>
        <SLink to='/category'>
          <Icon style={{ backgroundImage: `url(${imgRoutes.common}/ic_category_thin.png)` }} />
          <Text fontColor={true} fontWeightOption={true}>
            카테고리
          </Text>
        </SLink>
      </Item>

      <Item>
        <SLink to='/feed'>
          <Icon style={{ backgroundImage: `url(${imgRoutes.common}/ic_feed_thin.png)` }} />
          <Text fontColor={true} fontWeightOption={true}>
            피드
          </Text>
        </SLink>
      </Item>

      <Item>
        <Button>
          <Icon style={{ backgroundImage: `url(${imgRoutes.common}/ic_my_thin.png)` }} />
          <Text fontColor={true} fontWeightOption={true}>
            마이페이지
          </Text>
        </Button>
      </Item>
    </STabBar>
  );
};

export default Tabbar;
