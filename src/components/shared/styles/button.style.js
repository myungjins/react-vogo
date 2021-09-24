import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { ROBOTO } from "../common/fontFamily";

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.height56 ? "56px" : "48px")};
  padding: 0 10px;
  border: 1px solid ${C.PVOGO};
  border-radius: 4px;
  color: ${C.PVOGO};
  background-color: ${C.WHITE};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.37px;
  outline: none;
  pointer-events: ${(props) => (props.loadingBar ? "none" : "auto")};

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const BtnPurple = styled(Btn)`
  color: ${C.WHITE};
  background-color: ${C.PVOGO};
`;

export const BtnGray = styled(Btn)`
  color: ${C.WHITE};
  background-color: ${C.GCCD4D8};
  border: 1px solid ${C.GCCD4D8};
`;

export const BtnGray2 = styled(Btn)`
  color: ${C.WHITE};
  background-color: ${C.G646F7C};
  border: 1px solid ${C.G646F7C};
`;

export const BtnWhiteOn = styled(Btn)`
  color: ${C.PVOGO};
  background-color: ${C.WHITE};
  border: 1px solid ${C.PVOGO};
`;

export const BtnWhiteOff = styled(Btn)`
  color: ${C.G858F9C};
  background-color: ${C.WHITE};
  border: 1px solid ${C.GCCD4D8};
`;

export const BtnWhiteFull = styled(Btn)`
  color: ${C.RED};
  background-color: ${C.WHITE};
  border: none;
  border-radius: 0;
`;

export const BtnIcon = styled.i`
  width: 18px;
  min-width: 18px;
  height: 18px;
  margin-right: 3px;
  vertical-align: middle;
`;

export const BtnCall = styled(Btn)`
  max-width: 110px;
  padding: 0 10px;
  border: 1px solid
    ${(props) =>
      props.option === "1" //
        ? C.PVOGO
        : props.option === "2"
        ? C.GCCD4D8
        : props.option === "3"
        ? "#eaebee"
        : props.option === "4"
        ? C.GCCD4D8
        : props.option === "6"
        ? C.GCCD4D8
        : C.CPRIMARY};
  font-size: ${F.SPRIMARY};
  font-weight: normal;
  color: ${(props) =>
    props.option === "1" //
      ? C.PVOGO
      : props.option === "2"
      ? C.GCCD4D8
      : props.option === "3"
      ? "#eaebee"
      : props.option === "4"
      ? C.GCCD4D8
      : C.CPRIMARY};
`;

export const BtnBroadcast = styled(Btn)`
  max-width: 160px;
  height: 40px;
  padding: 0 10px;
  border: none;
  font-size: ${F.SMALL};
  font-weight: 600;
  color: ${(props) =>
    props.option === "1" //
      ? C.BLACK
      : props.option === "2"
      ? C.GACB5BD
      : props.option === "3"
      ? C.PVOGO
      : "#765bf1"};
  background-color: ${(props) =>
    props.option === "1" //
      ? C.GF8F9FA
      : props.option === "2"
      ? C.GF8F9FA
      : props.option === "3"
      ? C.BEDE9FF
      : "transparent"};
`;

export const BtnDelete = styled(Btn)`
  max-width: 90px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #eaeaea;
  font-size: ${F.SPRIMARY};
  font-weight: 400;
  color: ${C.BLACK};
  background-color: ${C.WHITE};
`;

// count
export const Count = styled.div`
  display: flex;
  align-items: center;
  width: 114px;
  height: 40px;
  border: 1px solid #eaeaea;
  background-color: ${C.WHITE};
  border-radius: 24px;
`;

export const CountBtn = styled.button`
  width: 35%;
  height: 100%;
  outline: none;
`;

export const CountIcon = styled.i`
  width: 14px;
  height: 17px;
  vertical-align: middle;
  opacity: ${(props) => (props.option ? 0.2 : 1)};
`;

export const CountIconGray = styled(CountIcon)`
  opacity: 0.2;
`;

export const InputWrap = styled.div`
  width: 30%;
  height: 100%;
  font-size: ${F.SPRIMARY};
  color: ${C.BLACK};
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${F.SPRIMARY};
  color: ${C.BLACK};
  border: none;
  text-align: center;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Count2 = styled.p`
  width: 100%;
  height: 100%;
  font-size: ${F.SPRIMARY};
  color: ${C.BLACK};
  border: none;
  padding: 9px 0;
`;

// Button Link
export const LinkBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 0 6px;
  border-bottom: 1px solid #e6e6e6;
  font-size: ${F.MEDIUM};
  outline: none;
`;

export const LinkIcon = styled.i`
  width: 24px;
  height: 24px;
  background-size: 7px;
  opacity: 0.5;
  vertical-align: middle;
`;

export const CircleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 44px;
  height: 44px;
  background-color: ${C.PVOGO};
  border-radius: 100%;
  outline: none;
`;

export const CircleCount = styled.span`
  position: absolute;
  left: 30px;
  top: -5px;
  padding: 2px 4px;
  font-size: 11px;
  color: ${C.PVOGO};
  font-weight: 800;
  background-color: ${C.WHITE};
  border-radius: 5px;
`;

export const CircleIcon = styled(BtnIcon)`
  width: 27px;
  min-width: 27px;
  height: 27px;
  margin-left: 4px;
`;

export const CircleEx = styled.div`
  position: absolute;
  top: -83px;
  right: -11px;
  min-width: 138px;
  padding: 12px 14px;
  border: 1px solid ${C.GCCD4D8};
  background-color: ${C.WHITE};
  border-radius: 8px;
  box-shadow: 0 0 6px 1px rgb(206 211 218 / 60%);
  &:after,
  &:before {
    top: 100%;
    right: 12px;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: ${C.GCCD4D8};
    border-width: 8px 6px;
    margin-left: -10px;
  }
  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${C.WHITE};
    border-width: 7px 4px;
    margin-right: 2px;
  }
`;

export const CircleTxt = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.G858F9C};
  font-weight: 400;
  text-align: left;
  letter-spacing: -0.35px;
  line-height: 18px;
`;

export const CircleTxt2 = styled.span`
  color: ${C.G4A5561};
  font-weight: 700;
`;

export const CircleUpBtn = styled(CircleBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 44px;
  height: 44px;
  background-color: ${C.WHITE};
  border-radius: 100%;
  outline: none;
  box-shadow: 0 0 6px 2px rgb(206 211 218 / 60%);
`;

export const CircleIcon2 = styled(CircleIcon)`
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin: 0;
  background-size: cover;
`;

export const PlusBtn = styled.button`
  width: 44px;
  height: 44px;
`;

export const CartBtn = styled.button`
  position: relative;
  width: 27px;
  height: 27px;
`;

export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 14px;
  top: -5px;
  width: auto;
  height: auto;
  padding: 2px 5px;
  font-size: 11px;
  color: ${C.WHITE};
  font-weight: 500;
  font-family: ${ROBOTO};
  background-color: ${C.RED};
  border-radius: 8px;
`;
