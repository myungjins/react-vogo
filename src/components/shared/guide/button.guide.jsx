import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/button.style";

const Containner = styled.div`
  padding: 30px 0;
`;

const Btn = styled(S.BtnBox)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Btn2 = styled(S.BtnBox)`
  height: 145px;
  padding: 100px 0 0 100px;
`;

const ButtonGuide = () => {
  return (
    <Containner>
      <Btn>
        <S.BtnPurple>
          <S.BtnIcon icon={"downloadWhite"} />
          주문하기
        </S.BtnPurple>
      </Btn>

      <Btn>
        <S.BtnGray>
          <S.BtnIcon icon={"downloadWhite"} />
          주문하기
        </S.BtnGray>
      </Btn>

      <Btn>
        <S.BtnPurple>주문하기</S.BtnPurple>
      </Btn>

      <Btn>
        <S.BtnGray>주문하기</S.BtnGray>
      </Btn>

      <Btn>
        <S.BtnPurple height56={true}>주문하기56</S.BtnPurple>
      </Btn>

      <Btn>
        <S.BtnGray height56={true}>주문하기56</S.BtnGray>
      </Btn>

      <Btn>
        <S.BtnWhiteOn>주문하기</S.BtnWhiteOn>
      </Btn>

      <Btn>
        <S.BtnWhiteOn>
          <S.BtnIcon icon={"downloadPurple"} />
          주문하기
        </S.BtnWhiteOn>
      </Btn>

      <Btn>
        <S.BtnWhiteOff>주문하기</S.BtnWhiteOff>
      </Btn>

      <Btn>
        <S.BtnWhiteOff>
          <S.BtnIcon icon={"downloadGray"} />
          주문하기
        </S.BtnWhiteOff>
      </Btn>

      <Btn>
        <S.BtnWhiteFull>주문하기</S.BtnWhiteFull>
      </Btn>

      <Btn>
        <S.BtnCall option={"1"}>
          <S.BtnIcon icon={"callPurple"} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"2"}>
          <S.BtnIcon icon={"callBlack"} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"3"}>
          <S.BtnIcon icon={"callGray"} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"4"}>전화걸기</S.BtnCall>

        <S.BtnCall option={"5"}>전화걸기</S.BtnCall>

        <S.BtnCall option={"6"}>
          <S.BtnIcon icon={"callBlack"} />
          전화걸기
        </S.BtnCall>
      </Btn>

      <Btn>
        <S.BtnBroadcast option={"1"}>방송 종료</S.BtnBroadcast>

        <S.BtnBroadcast option={"2"}>방송 종료</S.BtnBroadcast>

        <S.BtnBroadcast option={"3"}>방송 보기</S.BtnBroadcast>

        <S.BtnBroadcast option={"4"}>기획전 버튼</S.BtnBroadcast>
      </Btn>

      <Btn>
        <S.BtnDelete>
          <S.BtnIcon icon={"deleteGray"} />
          삭제
        </S.BtnDelete>
      </Btn>

      <Btn>
        <S.Count>
          <S.CountBtn type='button'>
            <S.CountIcon icon={"minusGray"} />
          </S.CountBtn>
          <S.InputWrap>
            <S.Input type='number' />
          </S.InputWrap>
          <S.CountBtn type='button'>
            <S.CountIcon icon={"plusBlack"} />
          </S.CountBtn>
        </S.Count>
      </Btn>

      <Btn>
        <S.Count>
          <S.CountBtn type='button'>
            <S.CountIcon icon={"minusBlack2"} />
          </S.CountBtn>
          <S.InputWrap>
            <S.Input type='number' />
          </S.InputWrap>
          <S.CountBtn type='button'>
            <S.CountIcon icon={"plusBlack"} option={true} />
          </S.CountBtn>
        </S.Count>
      </Btn>

      <Btn>
        <S.LinkBtn>
          주문목록, 배송조회
          <S.LinkIcon icon={"arrowStepNext"} />
        </S.LinkBtn>
      </Btn>

      <Btn2>
        <S.CircleBtn>
          <S.CircleEx>
            <S.CircleTxt>
              방송 예고를 보고
              <br /> <S.CircleTxt2>댓글을 남겨보세요!</S.CircleTxt2>
            </S.CircleTxt>
          </S.CircleEx>
          <S.CircleCount>999</S.CircleCount>
          <S.CircleIcon icon={"commentWhite"} />
        </S.CircleBtn>
      </Btn2>

      <Btn>
        <S.CircleUpBtn>
          <S.CircleIcon2 icon={"arrowUpBlack"} />
        </S.CircleUpBtn>
      </Btn>

      <Btn>
        <S.PlusBtn></S.PlusBtn>
      </Btn>

      <Btn>
        <S.CartBtn>
          <S.CartCount>4</S.CartCount>
        </S.CartBtn>
      </Btn>
    </Containner>
  );
};

export default ButtonGuide;
