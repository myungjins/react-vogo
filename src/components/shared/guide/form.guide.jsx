import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/form.style";
import { LARGE } from "components/shared/common/fontSize";
import { imgRoutes } from "components/shared/common/images";

const Containner = styled.div`
  padding: 20px 0;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: ${LARGE};
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;

const Form = styled.div`
  margin-bottom: 40px;
`;

const Lable = styled(S.Lable)`
  &:not(:first-child) {
    margin-bottom: 5px;
  }
`;

const TextareaWrap = styled.div`
  &:not(:first-child) {
    margin-bottom: 20px;
  }
`;

const SelectWrap = styled.div`
  margin-bottom: 20px;
`;

const FormGuide = () => {
  return (
    <Containner>
      <Title>INPUT</Title>
      <Form>
        <S.FormText //
          type='text'
          placeholder='내용을 입력해주세요 (최대 50자)'
          maxLength={50}
        />
      </Form>

      <Form>
        <S.FormText //
          type='text'
          placeholder='내용을 입력해주세요 (최대 50자)'
          maxLength={50}
        />
        <S.FormHelper>협의되지 않은 요청사항은 반영되지 않을 수 있습니다</S.FormHelper>
      </Form>

      <Form>
        <S.FormTitleWrap>
          <S.FormTitle>배송지명</S.FormTitle>
        </S.FormTitleWrap>
        <S.FormText //
          type='text'
          readOnly
        />
      </Form>

      <Form>
        <S.FormTitleWrap>
          <S.FormTitle>배송지명</S.FormTitle>
          <S.FormBtn type='button'>배송지 변경</S.FormBtn>
        </S.FormTitleWrap>
        <S.FormText //
          type='text'
          readOnly
        />
      </Form>

      <Form>
        <S.FormLabeling>주소</S.FormLabeling>
        <S.FormIconBox>
          <S.FormLabelingText //
            type='text'
            placeholder='주소 검색'
          />
          <S.FormIcon icon={"searchBlack"} />
        </S.FormIconBox>
        <S.FormHelper>협의되지 않은 요청사항은 반영되지 않을 수 있습니다</S.FormHelper>
      </Form>

      <Form>
        <S.FormLabeling>주소</S.FormLabeling>
        <S.AddressBox>
          <S.AddressForm //
            type='text'
            placeholder='주소 검색'
          />
          <S.AddressBtn type='button'>우편번호 검색</S.AddressBtn>
        </S.AddressBox>
        <S.FormText //
          type='text'
          placeholder='내용을 입력해주세요 (최대 50자)'
          maxLength={50}
        />
      </Form>

      <Form>
        <SelectWrap>
          <S.SelectBox>
            <S.SelectOption>1</S.SelectOption>
            <S.SelectOption>2</S.SelectOption>
            <S.SelectOption>3</S.SelectOption>
            <S.SelectOption>4</S.SelectOption>
            <S.SelectOption>5</S.SelectOption>
          </S.SelectBox>
        </SelectWrap>

        <SelectWrap>
          <S.SelectBoxDefault default Value={"DEFAULT"} required>
            <S.SelectOptionDefault value='DEFAULT' defaultValue disabled>
              1
            </S.SelectOptionDefault>
            <S.SelectOptionDefault>2</S.SelectOptionDefault>
            <S.SelectOptionDefault>3</S.SelectOptionDefault>
            <S.SelectOptionDefault>4</S.SelectOptionDefault>
            <S.SelectOptionDefault>5</S.SelectOptionDefault>
          </S.SelectBoxDefault>
        </SelectWrap>
      </Form>

      <Form>
        <S.FormTextarea //
          placeholder='문의 내용을 100자 이내로 입력해주세요'
          maxLength={100}
        />
        <S.TextareaCnt>(0/100)</S.TextareaCnt>
      </Form>

      <Form>
        <Title>RADIO</Title>
        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              defaultChecked
              icon={"radioOn"}
            />
            <S.Check />
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              icon={"radioOn"}
            />
            <S.Check />
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              icon={"radioOn"}
              disabled
            />
            <S.Check />
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              icon={"radioOn"}
            />
            <S.Check />
            <S.CheckName>여성</S.CheckName>
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              icon={"radioOn"}
              disabled
            />
            <S.Check />
            <S.CheckName>남성</S.CheckName>
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckStartWrap>
            <S.CheckBox //
              type='radio'
              name='apiName'
              icon={"radioOn"}
            />
            <S.Check />
            <S.CheckRight>
              <S.CheckName>무통장 입금</S.CheckName>
              <S.TxtsWrap>
                <S.Item>
                  <S.ItemLeft>입금은행</S.ItemLeft>
                  <S.ItemRight>신한은행 (562-002-29654605)</S.ItemRight>
                </S.Item>
                <S.Item>
                  <S.ItemLeft>예금주</S.ItemLeft>
                  <S.ItemRight>보고플레이</S.ItemRight>
                </S.Item>
                <S.Item>
                  <S.ItemLeft>입금액</S.ItemLeft>
                  <S.ItemRight color={"#6728ff"}>5,000원</S.ItemRight>
                </S.Item>
              </S.TxtsWrap>
            </S.CheckRight>
          </S.CheckStartWrap>
        </Lable>
      </Form>

      <Form>
        <Title>CHECKBOX</Title>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='checkbox'
              icon={"checkOn"}
            />
            <S.Check />
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='checkbox'
              icon={"checkOn"}
              disabled
            />
            <S.Check />
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='checkbox'
              icon={"checkOn"}
            />
            <S.Check />
            <S.CheckName>여성</S.CheckName>
          </S.CheckWrap>
        </Lable>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='checkbox'
              icon={"checkOn"}
              disabled
            />
            <S.Check />
            <S.CheckName>남성</S.CheckName>
          </S.CheckWrap>
        </Lable>

        <S.CheckExpand icon={"arrowExpand"}>
          <Lable>
            <S.CheckListWrap>
              <S.CheckBox //
                type='checkbox'
                icon={"checkOn"}
              />
              <S.Check />
              <S.CheckName>리스트 텍스트</S.CheckName>
            </S.CheckListWrap>
          </Lable>
        </S.CheckExpand>

        <S.CheckText>
          <Lable>
            <S.CheckListWrap>
              <S.CheckBox //
                type='checkbox'
                icon={"checkOn"}
              />
              <S.Check />
              <S.CheckName>리스트 텍스트</S.CheckName>
            </S.CheckListWrap>
          </Lable>
          <S.Arrow icon={"arrowSelect"} />
        </S.CheckText>

        <Lable>
          <S.CheckWrap>
            <S.CheckBox //
              type='checkbox'
              icon={"checkSquareOn"}
            />
            <S.Check className='square' />
            <S.CheckName>체크박스가 네모인 경우</S.CheckName>
          </S.CheckWrap>
        </Lable>
      </Form>

      <Form>
        <Title>TOGGLE</Title>

        <S.Toggle>
          <S.CheckWrap>
            <S.ToggleCheck //
              type='checkbox'
              icon={"checkOn"}
            />
            <S.ToggleSlider />
          </S.CheckWrap>
        </S.Toggle>
      </Form>

      <Form>
        <Title>Textarea</Title>

        <TextareaWrap>
          <S.Textarea name='' placeholder='자세한 사유를 입력해주세요.'></S.Textarea>
        </TextareaWrap>

        <TextareaWrap>
          <S.Textarea name='' placeholder='자세한 사유를 입력해주세요.'></S.Textarea>
          <S.FormHelper2>협의되지 않은 요청사항은 반영되지 않을 수 있습니다</S.FormHelper2>
        </TextareaWrap>
      </Form>

      <Form>
        <Title>Photo</Title>
        <S.ImgWraps>
          <S.ImgWrap>
            <S.ImgItem>
              <S.PrdImg src={`url(${imgRoutes.thumbnail}/profile_default.png)`} alt='상품' />
              <S.ImgInput type='file' id='userImage1' />
              <S.ImgLabel htmlFor='userImage1'>
                <S.ImgTxt>사진추가</S.ImgTxt>
              </S.ImgLabel>
            </S.ImgItem>
            <S.ImgButton type='button'></S.ImgButton>
          </S.ImgWrap>
          <S.ImgWrap>
            <S.ImgItem>
              {/* <S.PrdImg src={thumb} alt="첨부" /> */}
              <S.ImgInput type='file' id='userImage1' />
              <S.ImgLabel htmlFor='userImage1'>
                <S.ImgTxt>사진추가</S.ImgTxt>
              </S.ImgLabel>
            </S.ImgItem>
            <S.ImgButton type='button'></S.ImgButton>
          </S.ImgWrap>
        </S.ImgWraps>
      </Form>
    </Containner>
  );
};

export default FormGuide;
