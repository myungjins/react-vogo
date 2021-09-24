import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { ROBOTO } from "components/shared/common/fontFamily";
import { imgRoutes } from "components/shared/common/images";

export const ItemWrap = styled.div`
  padding: 12px 0;
`;

export const CalenderItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ItemRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  &.center {
    align-items: center;
  }
`;

export const ItemRight2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 135px;
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Thumb = styled.div`
  overflow: hidden;
  width: 90px;
  min-width: 90px;
  height: 90px;
  min-height: 90px;
  margin-right: 12px;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
`;

export const Thumb2 = styled(Thumb)`
  width: 87px;
  min-width: 87px;
  height: 87px;
  min-height: 87px;
  margin-right: 10px;
`;

export const Thumb3 = styled(Thumb)`
  width: 90px;
  min-width: 90px;
  height: 135px;
  min-height: 135px;
  margin-right: 10px;
`;

export const ThumbEnd = styled(Thumb3)`
  position: relative;
  &:after {
    content: "라이브 종료";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: ${F.SPRIMARY};
    color: ${C.WHITE};
    font-weight: 400;
    letter-spacing: -0.43px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ItemTxts = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const ItemTxts2 = styled(ItemTxts)`
  height: 100%;
  min-height: 87px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemTitle = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  font-size: ${F.MEDIUM};
  color: ${C.CPRIMARY};
  line-height: 20px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

export const ItemTitle2 = styled(ItemTitle)`
  width: calc(100% - 8px);
  font-size: ${F.SPRIMARY};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.4px;
`;

export const ItemTitle3 = styled(ItemTitle)`
  font-size: ${F.SPRIMARY};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  -webkit-line-clamp: 3;
`;

export const ItemTime = styled.p`
  width: 100%;
  height: auto;
  /* margin-bottom: 2px; */
  font-size: 17px;
  color: ${C.BLACK};
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.4px;
`;

export const Name = styled.p`
  position: absolute;
  left: 0;
  bottom: 7px;
  font-size: ${F.SPRIMARY};
  color: ${C.G4A5561};
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.43px;
`;

export const NumberWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 16px;
  color: ${C.G4A5561};
  font-weight: 700;
  &:not(:last-of-type) {
    padding-right: 7px;
  }
`;

export const Cost = styled.del`
  font-size: 16px;
  color: ${C.GCCD4D8};
  font-weight: 400;
`;

export const Sale = styled.p`
  padding-right: 6px;
  font-size: 16px;
  color: ${C.PVOGO};
  font-weight: 500;
`;

export const Count = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${C.G4A5561};
  font-weight: 500;
  &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 14px;
    margin-right: 6px;
    background-color: ${C.GACB5BD};
  }
`;

// 옵션

export const OptionWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 8px;
`;

export const ItemOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const OpBox = styled.span`
  display: inline-block;
  min-width: 30px;
  padding: 0 3px;
  font-size: ${F.Xsmall};
  color: ${C.G858F9C};
  text-align: center;
  border: 1px solid ${C.GCCD4D8};
`;

export const OpTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 50px);
`;

export const OpTxt = styled.span`
  display: -webkit-box;
  overflow: hidden;
  width: auto;
  height: 18px;
  padding-left: 4px;
  font-size: ${F.Xsmall};
  color: ${C.G858F9C};
  line-height: 18px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const OpBtn = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  width: 19px;
  min-width: 19px;
  height: 17px;
  background: url("${imgRoutes.common}/ic_arrow_option.png") no-repeat center/contain;
  cursor: pointer;
`;

// 옵션팝업
export const OptionPopup = styled.div`
  display: ${(props) => (props.optionSee ? "block" : "none")};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 16px;
  background-color: ${C.WHITE};
  border-radius: 4px;
  z-index: 99;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 13px;
`;

export const Title = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.BLACK};
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const CloseBtn = styled.button`
  display: inline-block;
  width: 18px;
  height: 19px;
  color: transparent;
  text-indent: -9999px;
`;

export const ContentWrap = styled.div`
  font-size: ${F.SMALL};
  color: ${C.BLACK};
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 20px;
`;

export const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  height: auto;
  line-height: 18px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

export const ItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const ItemTop2 = styled(ItemTop)`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid ${C.GF1F3F5};
`;

export const ItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 0 28px;
  &.right {
    justify-content: flex-end;
  }
`;

export const OrderWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderTxt = styled.p`
  padding-right: 16px;
  font-size: ${F.SPRIMARY};
  color: ${C.CPRIMARY};
  font-weight: 500;
`;

export const CheckWrap = styled.div`
  padding-right: 8px;
`;

export const ItemState = styled.p`
  padding-top: 10px;
  font-size: ${F.SPRIMARY};
  color: ${C.PVOGO};
  font-weight: 500;
  line-height: 17px;
  &.right {
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
  }
  /* 배송완료 */
  &.inactive {
    color: ${C.G858F9C};
  }
`;

export const CartBtn = styled.button`
  width: 34px;
  height: 34px;
`;

export const AlarmBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

export const AlarmBtnActive = styled(AlarmBtn)`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

export const AlarmCount = styled.p`
  /* margin-top: 5px; */
  font-size: ${F.SMALL};
  color: ${C.G4A5561};
  font-weight: 600;
  line-height: 16px;
  &:after {
    content: "명";
  }
`;

export const StoreWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
`;

export const HomeIcon = styled.i`
  width: 15px;
  height: 14px;
  margin-right: 6px;
  vertical-align: middle;
`;

export const StoreName = styled.p`
  font-size: 16px;
  color: ${C.CPRIMARY};
  font-weight: 500;
`;

export const StateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2px 0 14px;
  /* margin-bottom: 12px; */
  border-bottom: 1px solid ${C.GF1F3F5};
  &.numberwrap {
    padding: 8px 0;
    div {
      align-items: flex-start;
      flex-direction: column;
      span {
        padding-top: 7px;
      }
    }
  }
`;

export const StoreTxt = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreState = styled.p`
  padding-right: 10px;
  font-size: 16px;
  color: ${C.BLACK};
  font-weight: 700;
  &.purple {
    color: ${C.PVOGO};
  }
  &.blue {
    color: #5f5fff;
  }
`;

export const StoreDate = styled.span`
  padding-right: 10px;
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  font-weight: 400;
`;

export const StoreBtn = styled.button`
  width: 8px;
  height: 13px;
`;

export const GoodsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid ${C.GF1F3F5};
  background-color: ${C.WHITE};
`;

export const GoodsTxt = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: ${C.CPRIMARY};
  font-weight: 500;
`;

export const GoodsTxtPurple = styled.span`
  margin-left: 3px;
  color: ${C.PVOGO};
`;

export const GoodsBtn = styled.button`
  width: auto;
  height: 100%;
  padding-right: 18px;
  font-size: ${F.SPRIMARY};
  color: ${C.PVOGO};
  font-weight: 700;
`;

export const GoodsGrayBtn = styled(GoodsBtn)`
  font-size: ${F.SPRIMARY};
  color: ${C.G4A5561};
  font-weight: 700;
`;

export const PayContent = styled.div`
  padding: 12px 0 20px;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: ${(props) => props.padding && "6px 0 16px !important"};
  &:not(:last-of-type) {
    padding-bottom: 10px;
  }
`;

export const Left = styled.p`
  display: flex;
  align-items: center;
  font-size: ${F.MEDIUM};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 20px;
`;

export const LeftBold = styled(Left)`
  font-size: 17px;
  color: ${C.BLACK};
  font-weight: 800;
`;

export const Right = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.G4A5561};
  font-weight: 400;
  line-height: 22px;
`;

export const RightBold = styled(Right)`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: ${C.PVOGO};
  font-weight: 800;
`;

export const Date = styled.p`
  width: 100%;
  padding: 24px 0 0;
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  font-weight: 400;
`;

export const CouponBtn = styled.button`
  width: auto;
  height: auto;
  padding: 3px 5px;
  margin-right: 8px;
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  font-weight: 400;
  border: 1px solid #d8d8d8;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

export const DeliveryBtn = styled.button`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;

// 배송비 팝업
export const DelModal = styled.div`
  display: ${(props) => (props.DelSee ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 98.88%;
  padding: 16px;
  background-color: ${C.WHITE};
  border-radius: 4px;
  box-shadow: 0 0 14px rgb(0 0 0 / 40%);
  z-index: 10;
`;

export const DelModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

export const DelModalTit = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.BLACK};
  font-weight: 700;
  line-height: 18px;
`;

export const DelModalTexts = styled.ul``;

export const DelModalText = styled.li`
  font-size: ${F.SPRIMARY};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 20px;
  &:not(:last-of-type) {
    padding-bottom: 4px;
  }
`;

export const DelText = styled.span`
  color: ${C.BLACK};
  font-weight: 500;
  padding-left: 8px;
`;

export const DelClose = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

export const TxtsWrap = styled.div`
  width: 100%;
  padding: 22px 16px 24px;
  background-color: ${C.GF1F3F5};
  border-radius: 4px;
`;

export const TxtsTitle = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.G343A40};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Txts = styled.span`
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  font-weight: 400;
  line-height: 20px;
`;

export const TxtsBlackColor = styled(Txts)`
  color: ${C.BLACK};
  font-weight: 500;
`;

export const TxtsPurpleColor = styled(Txts)`
  color: ${C.PVOGO};
  font-weight: 500;
`;

export const TxtsGrayColor = styled(Txts)`
  color: ${C.G858F9C};
`;

export const BorderWrap = styled.div`
  &:after {
    content: "";
    display: block;
    height: 8px;
    margin: 0 -16px;
    border-top: 1px solid #e6e6e6;
    background-color: ${C.GF1F3F5};
  }
`;

export const StepWrap = styled.div`
  padding: 0 27px 25px;
  margin: 0 -16px;
  border-bottom: 1px solid ${C.GF1F3F5};
`;

export const StepWrapInner = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0 auto 6px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  background-color: ${(props) => (props.backgroundColor ? "#6728ff" : "#e1e4e7")};
  border-radius: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: calc(50% + 11px);
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed ${C.GCCD4D8};
  }
`;

export const IconNone = styled(Icon)`
  &::after {
    display: none;
  }
`;

export const Txt = styled.div`
  font-size: 13px;
  color: ${C.GACB5BD};
  font-weight: 400;
  line-height: 18px;
`;

export const TxtActive = styled(Txt)`
  color: ${C.PVOGO};
  font-weight: 600;
`;

export const RightPlus = styled(Right)`
  &:before {
    content: "+";
    padding-right: 3px;
    font-size: ${F.SPRIMARY};
    color: ${C.PVOGO};
    font-weight: 600;
  }
`;

export const RightEx = styled.span`
  padding-right: 7px;
  font-size: ${F.SMALL};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 17px;
`;

export const ShippingFee = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: ${F.SMALL};
  color: ${C.PVOGO};
  font-weight: 400;
  line-height: 18px;
`;

export const TxtsLeftWrap = styled.div`
  padding: 13px 0 17px;
  background-color: ${C.WHITE};
`;

export const TxtsLeftItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  &:not(:first-of-type) {
    padding-top: 12px;
  }
`;

export const TxtsLeftLeft = styled.p`
  min-width: 66px;
  font-size: ${F.MEDIUM};
  color: ${C.G646F7C};
  font-weight: 400;
  line-height: 20px;
`;

export const TxtsLeftRight = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.G343A40};
  font-weight: 400;
  line-height: 20px;
  word-break: break-word;
`;

export const ImgLeftRight = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
`;

export const ImgWrap = styled.div`
  width: 65px;
  height: 65px;
  &:not(last-of-type) {
    margin-right: 2px;
  }
`;

export const CalenderWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 17px 12px 0 0;
`;

export const CalenderTime = styled.p`
  font-size: ${F.LARGE};
  color: ${C.BLACK};
  font-weight: bold;
  line-height: 23px;
  letter-spacing: -0.4px;
`;

export const CalenderTxt = styled.p`
  padding: 5px 0 8px;
  font-size: ${F.SPRIMARY};
  color: ${C.GACB5BD};
  font-weight: bold;
  letter-spacing: -0.25px;
  line-height: 14px;
`;

export const CalenderIcon = styled.div`
  position: relative;
  margin-left: 7px;
  width: 5px;
  height: 5px;
  background-color: ${C.G858F9C};
  border-radius: 100%;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 2px;
    width: 1px;
    height: ${(props) => (props.long ? "92px" : "72px")};
    background-color: ${C.GDFE5E8};
  }
`;

export const CalenderBott = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const CalenderLeft = styled.div``;

export const CalenderName = styled.p`
  margin-bottom: 9px;
  font-size: ${F.SPRIMARY};
  color: ${C.G858F9C};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.4px;
`;

export const CalenderAlarm = styled.div`
  display: flex;
  align-items: center;
`;

export const CalenderCount = styled.p`
  display: flex;
  align-items: center;
  font-size: ${F.SPRIMARY};
  color: ${C.G646F7C};
  font-weight: 400;
  font-family: ${ROBOTO};
  line-height: 16px;
  &::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`;

export const CalenderView = styled(CalenderCount)`
  margin-left: 6px;
  &::before {
    margin-right: 3px;
  }
`;

export const TxtInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3px;
`;

export const AlarmCount2 = styled(AlarmCount)`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`;

export const PStoreName = styled.p`
  margin-bottom: 4px;
  font-size: ${F.SMALL};
  color: ${C.G4A5561};
  font-weight: bold;
  letter-spacing: -0.35px;
`;

export const PThumb = styled(Thumb)`
  width: 94px;
  min-width: 94px;
  height: 94px;
  min-height: 94px;
`;

export const PItemTitle = styled(ItemTitle)`
  margin-bottom: 10px;
  font-size: ${F.MEDIUM};
  color: ${C.G343A40};
`;

export const PSale = styled(Sale)`
  font-weight: bold;
`;

export const PPrice = styled(Price)`
  color: #21252a;
  font-weight: bold;
`;

export const GiftCardTxt = styled.p`
  margin-top: 10px;
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  font-weight: 400;
  letter-spacing: -0.35px;
  text-align: left;
`;

export const GiftCardTxtWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 12px;
  margin-top: 16px;
  background-color: ${C.GF8F9FA};
  box-sizing: border-box;
  border-radius: 4px;
`;

export const GiftCardTxt2 = styled(GiftCardTxt)`
  margin-top: 0;
`;

export const GiftCardTxtPurple = styled(GiftCardTxt2)`
  margin-bottom: 4px;
  color: ${C.PVOGO};
  font-weight: 600;
`;
