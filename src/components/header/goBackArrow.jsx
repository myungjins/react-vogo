import styled from "styled-components";
import { WHITE } from "components/shared/common/colors";
import { imgRoutes } from "components/shared/common/images";
import { useHistory } from "react-router";

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  max-width: 720px;
  width: 100%;
  height: 56px;
  background-color: transparent;
  &.change_header {
    background-color: ${WHITE};
  }
`;

const Back = styled.button`
  width: 24px;
  height: 24px;
  background: url("${imgRoutes.common}/ic_arrow_black_left.png") no-repeat center/contain;
  border: none;
`;

const GoBackArrow = (home) => {
  const history = useHistory();
  return (
    <AppHeader>
      <Back
        onClick={() => {
          if (home === undefined) {
            history.goBack();
          } else {
            history.push("/");
          }
        }}
      ></Back>
    </AppHeader>
  );
};

export default GoBackArrow;
