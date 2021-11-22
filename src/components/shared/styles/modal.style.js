import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";

export const Dim = styled.div`
  display: ${(props) => (props.isOpen ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1100;
  transform: translate(-50%, -50%);
  width: 93%;
  max-width: 330px;
  border-radius: 4px;
  background-color: ${C.WHITE};
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
`;

export const FontBox = styled.div`
  max-width: ${(props) => (props.option ? "100%" : "280px")};
  padding: ${(props) => (props.option ? "36px 24px 25px" : "28px 24px 25px")};
  text-align: ${(props) => (props.option ? "center" : "left")};
  &::after {
    content: "";
    display: ${(props) => (props.option ? "block" : "none")};
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
  }
`;

export const TitleModal = styled.p`
  margin-bottom: ${(props) => (props.mgb ? "0" : "16px")};
  font-size: 18px;
  font-weight: 600;
  color: ${C.CPRIMARY};
  line-height: 1.33;
`;

export const TextModal = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.G4A5561};
  line-height: 1.47;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonModal = styled.button`
  width: 100%;
  height: 48px;
  border-top: 1px solid #e0e4e9;
  font-size: 16px;
  font-weight: bold;
  color: ${C.PVOGO};
`;

export const ButtonModalLeft = styled(ButtonModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  width: 50%;
  color: ${C.G858F9C};
  border-right: 1px solid #e0e4e9;
  border-radius: 0 0 0 4px;
`;

export const ButtonModalRight = styled(ButtonModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  width: 50%;
  color: ${C.WHITE};
  background-color: ${C.PVOGO};
  border-radius: 0 0 4px 0;
`;
