import React from "react";
import styled from "styled-components";
import * as M from "components/shared/styles/modal.style";

const Dim = styled(M.Dim)`
  position: relative;
  top: 0;
  left: 0;
  padding: 40px 0;
`;

const Modal = styled(M.Modal)`
  position: relative;
  top: 0;
  left: 50%;
  z-index: 1100;
  transform: translateX(-50%);
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

const ModalGuide = () => {
  return (
    <>
      <Dim>
        <Modal>
          <M.FontBox>
            <M.TitleModal>로그인이 필요한 서비스입니다.</M.TitleModal>
            <M.TextModal>로그인하시겠습니까?</M.TextModal>
          </M.FontBox>
          <M.ButtonBox>
            <M.ButtonModalLeft>아니오</M.ButtonModalLeft>
            <M.ButtonModalRight>네</M.ButtonModalRight>
          </M.ButtonBox>
        </Modal>
      </Dim>
    </>
  );
};

export default ModalGuide;
