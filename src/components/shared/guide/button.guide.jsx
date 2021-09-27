import React from "react";
import styled from "styled-components";
import * as S from "components/shared/styles/button.style";
import { imgRoutes } from "../common/images";

const Container = styled.div`
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
    <Container>
      <Btn>
        <S.BtnPurple>
          <S.BtnIcon
            style={{ backgroundImage: `url(${imgRoutes.common}/ic_download_white.png)` }}
          />
          주문하기
        </S.BtnPurple>
      </Btn>

      <Btn>
        <S.BtnGray>
          <S.BtnIcon
            style={{ backgroundImage: `url(${imgRoutes.common}/ic_download_white.png)` }}
          />
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
          <S.BtnIcon
            style={{ backgroundImage: `url(${imgRoutes.common}/ic_download_purple.png)` }}
          />
          주문하기
        </S.BtnWhiteOn>
      </Btn>

      <Btn>
        <S.BtnWhiteOff>주문하기</S.BtnWhiteOff>
      </Btn>

      <Btn>
        <S.BtnWhiteOff>
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_download_gray.png)` }} />
          주문하기
        </S.BtnWhiteOff>
      </Btn>

      <Btn>
        <S.BtnWhiteFull>주문하기</S.BtnWhiteFull>
      </Btn>

      <Btn>
        <S.BtnCall option={"1"}>
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_call_purple.png)` }} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"2"}>
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_call_black.png)` }} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"3"}>
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_call_gray.png)` }} />
          전화걸기
        </S.BtnCall>

        <S.BtnCall option={"4"}>전화걸기</S.BtnCall>

        <S.BtnCall option={"5"}>전화걸기</S.BtnCall>

        <S.BtnCall option={"6"}>
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_call_black.png)` }} />
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
          <S.BtnIcon style={{ backgroundImage: `url(${imgRoutes.common}/ic_delete_gary2.png)` }} />
          삭제
        </S.BtnDelete>
      </Btn>

      <Btn>
        <S.Count>
          <S.CountBtn type='button'>
            <S.CountIcon
              style={{ backgroundImage: `url(${imgRoutes.common}/ic_minus_black.png)` }}
              option={true}
            />
          </S.CountBtn>
          <S.InputWrap>
            <S.Input type='number' />
          </S.InputWrap>
          <S.CountBtn type='button'>
            <S.CountIcon
              style={{ backgroundImage: `url(${imgRoutes.common}/ic_plus_black.png)` }}
            />
          </S.CountBtn>
        </S.Count>
      </Btn>

      <Btn>
        <S.Count>
          <S.CountBtn type='button'>
            <S.CountIcon
              style={{ backgroundImage: `url(${imgRoutes.common}/ic_minus_black.png)` }}
            />
          </S.CountBtn>
          <S.InputWrap>
            <S.Input type='number' />
          </S.InputWrap>
          <S.CountBtn type='button'>
            <S.CountIcon
              style={{ backgroundImage: `url(${imgRoutes.common}/ic_plus_black.png)` }}
              option={true}
            />
          </S.CountBtn>
        </S.Count>
      </Btn>

      <Btn>
        <S.LinkBtn>
          주문목록, 배송조회
          <S.LinkIcon
            style={{
              background: `url(${imgRoutes.common}/ic_arrow_gray.png) no-repeat center/contain`,
            }}
          />
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
          <S.CircleIcon
            style={{
              background: `url(${imgRoutes.common}/ic_comment_white.png) no-repeat center/contain`,
            }}
          />
        </S.CircleBtn>
      </Btn2>

      <Btn>
        <S.CircleUpBtn>
          <S.CircleIcon2
            style={{
              background: `url(${imgRoutes.common}/ic_arrow_top.png) no-repeat center/contain`,
            }}
          />
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
    </Container>
  );
};

export default ButtonGuide;
