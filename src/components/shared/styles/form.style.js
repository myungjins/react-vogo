import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";

// TEXT
export const FormText = styled.input`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid ${C.GCCD4D8};
  border-radius: 4px;
  font-size: ${F.MEDIUM};
  font-weight: 500;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: ${C.GACB5BD};
  }
  &:focus {
    border-color: ${C.G343A40};
    outline: none;
  }
  &.center {
    text-align: center;
  }
`;

export const FormTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const FormTitle = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.G4A5561};
  font-weight: 700;
  line-height: 17px;
`;

export const FormBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: ${F.SPRIMARY};
  color: ${C.PVOGO};
  font-weight: 700;
  line-height: 15px;
  outline: none;
  &:after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 21px;
    padding-left: 3px;
  }
`;

export const FormHelper = styled.div`
  padding: 16px 4px 0;
  font-size: ${F.SMALL};
  color: ${C.G858F9C};
  line-height: 16px;
`;

export const FormLabeling = styled.div`
  padding-bottom: 12px;
  font-size: ${F.SPRIMARY};
  font-weight: bold;
  color: ${C.CPRIMARY};
`;

export const FormIconBox = styled.div`
  position: relative;
  width: 100%;
`;

export const AddressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AddressForm = styled(FormText)`
  width: 60%;
`;

export const AddressBtn = styled.button`
  width: 40%;
  height: 48px;
  margin-left: 10px;
  padding: 0 5px;
  font-size: ${F.MEDIUM};
  color: ${C.WHITE};
  background-color: ${C.PVOGO};
`;

export const FormIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const FormLabelingText = styled(FormText)`
  position: relative;
  height: 56px;
  padding: 16px 48px 16px 18px;
  &:focus {
    border-color: ${C.GCCD4D8};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 110px;
  padding: 14px 16px;
  border: 1px solid ${C.GCCD4D8};
  border-radius: 4px;
  font-size: ${F.MEDIUM};
  font-weight: 500;
  resize: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: ${C.GACB5BD};
  }
  &:focus {
    border-color: ${C.G343A40};
    outline: none;
  }
`;

// SELECT
export const SelectBox = styled.select`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid ${C.GCCD4D8};
  border-radius: 4px;
  font-size: ${F.MEDIUM};
  font-weight: 400;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  &::-ms-expand {
    display: none;
  }
  option[disabled] {
    display: none;
  }

  option {
    color: ${C.CPRIMARY};
  }
`;

export const SelectOption = styled.option``;

export const TextareaCnt = styled.p`
  padding-top: 5px;
  font-size: ${F.SMALL};
  color: ${C.GCCD4D8};
`;

// CHECKBOX
export const CheckExpand = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  border-top: 1px solid ${C.GF1F3F5};
  border-bottom: 1px solid ${C.GF1F3F5};
`;

export const CheckText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Lable = styled.label`
  position: relative;
  display: block;
  height: 100%;
  cursor: pointer;
`;

export const CheckWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckListWrap = styled(CheckWrap)`
  padding: 14px 6px;
`;

export const CheckStartWrap = styled(CheckWrap)`
  align-items: flex-start;
`;

export const CheckBox = styled.input`
  //실제 체크박스는 화면에서 숨김
  display: none;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  /* Remove First */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:checked + i {
    border: none;
  }
  &:disabled + i {
    border: none;
    background-color: #eee;
  }
  &:disabled + i + p {
    color: ${C.GCCD4D8};
  }
`;

export const Check = styled.i`
  flex: 0 0 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${C.GCCD4D8};
  background-color: ${C.WHITE};
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;
  &.square {
    flex: 0 0 22px;
    width: 22px;
    height: 22px;
    background-size: 22px;
    border-radius: 4px;
  }
`;

export const CheckName = styled.p`
  margin-left: 8px;
  font-size: 17px;
  color: ${C.BLACK};
  line-height: 21px;
`;

export const Arrow = styled.button`
  width: 50px;
  height: 50px;
`;

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 37px;
  height: 18px;
`;

export const ToggleCheck = styled(CheckBox)`
  &:checked + span {
    background-color: ${C.PVOGO};
  }

  &:checked + span::before {
    transform: translate(18px, -50%);
    border: 2px solid #7567ff;
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.4s;
  background-color: #c8c8c8;
  border-radius: 34px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: -2px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.4s;
    height: 22px;
    width: 22px;
    background-color: #fff;
    border: 2px solid #c8c8c8;
    border-radius: 50%;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 104px;
  padding: 23px 16px;
  font-size: ${F.MEDIUM};
  font-weight: 400;
  border: 1px solid ${C.GCCD4D8};
  line-height: 18px;
  outline: none;
  resize: none;
  border-radius: 4px;
  &::placeholder {
    color: ${C.GACB5BD};
  }
`;

export const FormHelper2 = styled(FormHelper)`
  padding: 10px 0 0;
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

/* select option 클릭시 color: ${C.BLACK}; 바꿔주세요! */
export const SelectBoxDefault = styled(SelectBox)`
  color: ${(props) => (props.selected ? C.BLACK : C.GACB5BD)};
  font-weight: 400;
`;

export const SelectOptionDefault = styled(SelectOption)`
  color: ${C.BLACK};
`;

export const ImgWraps = styled.div`
  display: inline-block;
  width: 100%;
  padding: 12px 0 0;
  text-align: center;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin-right: 8px;
  float: left;
`;

export const ImgItem = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const PrdImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
`;

export const ImgInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -10;
`;

export const ImgLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px dashed #ced3da;
  border-radius: 4px;
`;

export const ImgTxt = styled.span`
  position: absolute;
  left: 50%;
  bottom: 19px;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  font-size: ${F.SMALL};
  color: ${C.GACB5BD};
  font-weight: 500;
  text-indent: 0;
  clip: auto;
  letter-spacing: -0.4px;
`;

export const ImgButton = styled.button`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 24px;
  height: 24px;
  z-index: 10;
  outline: none;
`;

export const CheckRight = styled.div``;

export const TxtsWrap = styled.div`
  padding: 14px 0 0 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(:last-of-type) {
    padding-bottom: 8px;
  }
`;

export const Txt = styled.p`
  font-size: 17px;
  color: ${C.G343A40};
  padding-bottom: 9px;
`;

export const ItemLeft = styled.p`
  font-size: ${F.MEDIUM};
  color: ${C.G858F9C};
  padding-right: 8px;
`;

export const ItemRight = styled.p`
  font-size: ${F.MEDIUM};
  color: ${(props) => (props.color === "#6728ff" ? "#6728ff" : "#252525")};
  padding-right: 8px;
`;
