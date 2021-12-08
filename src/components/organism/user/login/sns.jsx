import { imgRoutes } from "components/shared/common/images";
import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  height: 98px;
  margin: 50px -16px 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Sns = () => {
  return (
    <>
      <Banner style={{ backgroundImage: `url(${imgRoutes.thumbnail}/product_default.png)` }} />
    </>
  );
};

export default Sns;
