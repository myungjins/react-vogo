import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as M from "components/shared/styles/modal.style";
import { useHistory } from "react-router";

const Modal = styled(M.Modal)`
  max-width: 680px;
`;

const ButtonModalRight = styled(M.ButtonModalRight)`
  color: ${C.WHITE};
  background-color: ${C.PVOGO};
`;

const LoginModal = ({ loginModal, setLoginModal }) => {
  const history = useHistory();

  return (
    <>
      <M.Dim isOpen={loginModal}>
        <Modal>
          <M.FontBox>
            <M.TitleModal>로그인이 필요한 서비스입니다.</M.TitleModal>
            <M.TextModal>로그인하시겠습니까?</M.TextModal>
          </M.FontBox>
          <M.ButtonBox>
            <M.ButtonModalLeft onClick={() => setLoginModal(true)}>아니오</M.ButtonModalLeft>
            <ButtonModalRight
              onClick={() => {
                history.push("/user");
                setLoginModal(true);
              }}
            >
              예
            </ButtonModalRight>
          </M.ButtonBox>
        </Modal>
      </M.Dim>
    </>
  );
};

export default LoginModal;
