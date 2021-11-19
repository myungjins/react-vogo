import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
// import * as F from "components/shared/common/fontSize";

const Title = styled.p`
  margin-bottom: 24px;
  font-size: 28px;
  color: ${C.G343A40};
`;

const Form = () => {
  return (
    <>
      <Title>로그인</Title>
    </>
  );
};

export default Form;
