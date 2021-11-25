import React, { memo, useState } from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import { withRouter, useHistory } from "react-router-dom";
import { imgRoutes } from "components/shared/common/images";
import LoginModal from "components/modal/login.modal";

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

const TabHome = styled(Icon)`
  background: ${(props) =>
    props.icons
      ? `url("${imgRoutes.common}/ic_home_thin.png")`
      : `url("${imgRoutes.common}/ic_home_fill.png")`};
`;

const TabCategory = styled(Icon)`
  background: ${(props) =>
    props.icons
      ? `url("${imgRoutes.common}/ic_category_thin.png")`
      : `url("${imgRoutes.common}/ic_category_fill.png")`};
`;

const TabFeed = styled(Icon)`
  background: ${(props) =>
    props.icons
      ? `url("${imgRoutes.common}/ic_feed_thin.png")`
      : `url("${imgRoutes.common}/ic_feed_fill.png")`};
`;

const TabMy = styled(Icon)`
  background: ${(props) =>
    props.icons
      ? `url("${imgRoutes.common}/ic_my_thin.png")`
      : `url("${imgRoutes.common}/ic_my_fill.png")`};
`;

const Text = styled.p`
  margin-top: 2px;
  font-size: 9px;
  color: ${(props) => (props.fontColor ? C.G646F7C : C.BLACK)};
  font-weight: ${(props) => (props.fontWeightOption ? "400" : "500")};
  letter-spacing: -0.2px;
  pointer-events: none;
`;

const Tabbar = withRouter(
  memo(({ location: { pathname } }) => {
    // console.log(location.pathname);
    const history = useHistory();
    const [loginModal, setLoginModal] = useState(true);

    const handleLink = (url) => {
      console.log(url);
      if (url === "user") {
        setLoginModal(false);
      }
    };

    return (
      <STabBar scroll={true}>
        <Item>
          <Button onClick={() => history.push("/")}>
            <TabHome icons={pathname !== "/"} />
            <Text fontColor={pathname !== "/"} fontWeightOption={pathname !== "/"}>
              홈
            </Text>
          </Button>
        </Item>

        <Item actives={pathname === "/category"}>
          <Button onClick={() => history.push("/category")}>
            <TabCategory icons={pathname !== "/category"} />
            <Text fontColor={pathname !== "/category"} fontWeightOption={pathname !== "/category"}>
              카테고리
            </Text>
          </Button>
        </Item>

        <Item actives={pathname === "/feed"}>
          <Button onClick={() => history.push("/feed")}>
            <TabFeed icons={pathname !== "/feed"} />
            <Text fontColor={pathname !== "/feed"} fontWeightOption={pathname !== "/feed"}>
              피드
            </Text>
          </Button>
        </Item>

        <Item>
          <Button onClick={() => handleLink("user")} to='/user'>
            <TabMy icons={pathname !== "/user"} />
            <Text fontColor={pathname !== "/user"} fontWeightOption={pathname !== "/user"}>
              마이페이지
            </Text>
          </Button>
        </Item>

        <LoginModal //
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      </STabBar>
    );
  })
);

export default Tabbar;
