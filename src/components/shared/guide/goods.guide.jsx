import React, { memo } from "react";
import styled from "styled-components";
import * as G from "components/shared/styles/goods.style";
import * as S from "components/shared/styles/form.style";
import * as B from "components/shared/styles/button.style";
import { imgRoutes } from "components/shared/common/images";

const Wraps = styled.div`
  margin: 40px 0;
`;

const GoodsGuide = memo(() => {
  return (
    <>
      <G.ItemWrap>
        <G.ItemTop>
          <G.CheckWrap>
            <S.Lable>
              <S.CheckWrap>
                <S.CheckBox //
                  type='checkbox'
                />
                <S.Check />
              </S.CheckWrap>
            </S.Lable>
          </G.CheckWrap>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Price>
                  <G.Cost>50,000원</G.Cost>
                </G.Price>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
        <G.ItemBottom>
          <B.BtnDelete>
            <B.BtnIcon
              style={{ backgroundImage: `url(${imgRoutes.common}/ic_delete_gary2.png)` }}
            />
            삭제
          </B.BtnDelete>
          <G.OrderWrap>
            <G.OrderTxt>주문수량</G.OrderTxt>
            <B.Count>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_minus_black.png)` }}
                  option={true}
                />
              </B.CountBtn>
              <B.InputWrap>
                <B.Input type='number' />
              </B.InputWrap>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_plus_black.png)` }}
                />
              </B.CountBtn>
            </B.Count>
          </G.OrderWrap>
        </G.ItemBottom>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                {/* <G.OptionPopup>
                    <G.TitleWrap>
                      <G.Title>구매 옵션</G.Title>
                      <G.CloseBtn type="button">닫기</G.CloseBtn>
                    </G.TitleWrap>
                    <G.ContentWrap>
                      <G.Content>마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자</G.Content>
                    </G.ContentWrap>
                  </G.OptionPopup> */}
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Price>
                  <G.Cost>50,000원</G.Cost>
                </G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>
                      라이트퍼플 / M라이트퍼플 / M라이트퍼플 / M라이트퍼플 / M라이트퍼플 /
                      M라이트퍼플 / M라이트퍼플 / M
                    </G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
              <G.ItemState>주문취소</G.ItemState>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.NumberWrap>
                <G.Sale>43%</G.Sale>
                <G.Price>1,000원</G.Price>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
          <G.CartBtn type='button'></G.CartBtn>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemRight className='center'>
          <G.Thumb>
            <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
          </G.Thumb>
          <G.ItemTxts>
            <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세</G.ItemTitle>
            <G.NumberWrap>
              <G.Price>1,000원</G.Price>
              <G.Price>
                <G.Cost>50,000원</G.Cost>
              </G.Price>
            </G.NumberWrap>
          </G.ItemTxts>
        </G.ItemRight>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
                <G.ItemState className='right'>배송중</G.ItemState>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.NumberWrap>
                <G.Sale>43%</G.Sale>
                <G.Price>1,000원</G.Price>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
        <G.ItemBottom className='right'>
          <G.OrderWrap>
            <G.OrderTxt>반품수량</G.OrderTxt>
            <B.Count>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_minus_black.png)` }}
                  option={true}
                />
              </B.CountBtn>
              <B.InputWrap>
                <B.Input type='number' />
              </B.InputWrap>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_plus_black.png)` }}
                />
              </B.CountBtn>
            </B.Count>
          </G.OrderWrap>
        </G.ItemBottom>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={true}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
        <G.ItemBottom className='right'>
          <G.OrderWrap>
            <G.OrderTxt>반품수량</G.OrderTxt>
            <B.Count>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_minus_black.png)` }}
                  option={true}
                />
              </B.CountBtn>
              <B.InputWrap>
                <B.Input type='number' />
              </B.InputWrap>
              <B.CountBtn type='button'>
                <B.CountIcon
                  style={{ backgroundImage: `url(${imgRoutes.common}/ic_plus_black.png)` }}
                />
              </B.CountBtn>
            </B.Count>
          </G.OrderWrap>
        </G.ItemBottom>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.CheckWrap>
            <S.Lable>
              <S.CheckWrap>
                <S.CheckBox //
                  type='checkbox'
                />
                <S.Check />
              </S.CheckWrap>
            </S.Lable>
          </G.CheckWrap>
          <G.ItemRight>
            <G.Thumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb>
            <G.ItemTxts>
              <G.ItemTitle>제품명을 입력해주세요 제품명을 입력해주세요 12345</G.ItemTitle>
              <G.OptionWrap>
                <G.ItemOption>
                  <G.OpBox>옵션</G.OpBox>
                  <G.OpTitle>
                    <G.OpTxt>라이트퍼플 / M</G.OpTxt>
                    <G.OpBtn></G.OpBtn>
                  </G.OpTitle>
                </G.ItemOption>
                {/* 옵션팝업 */}
                <G.OptionPopup optionSee={false}>
                  <G.TitleWrap>
                    <G.Title>구매 옵션</G.Title>
                    <G.CloseBtn type='button'>닫기</G.CloseBtn>
                  </G.TitleWrap>
                  <G.ContentWrap>
                    <G.Content>
                      마카롱 도마세트(4종) / 스트로베리 & 화이트 색상 / 25cm x 1.6in / 40자
                    </G.Content>
                  </G.ContentWrap>
                </G.OptionPopup>
              </G.OptionWrap>
              <G.NumberWrap>
                <G.Price>1,000원</G.Price>
                <G.Count>1개</G.Count>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb2>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb2>
            <G.ItemTxts2>
              <G.ItemTime>오늘 11:30</G.ItemTime>
              <G.ItemTitle2>VIPS로 만드는 우리집 레스토랑</G.ItemTitle2>
              <G.Name>NnF</G.Name>
            </G.ItemTxts2>
          </G.ItemRight>
          <G.ItemLeft>
            <G.AlarmBtn type='button'></G.AlarmBtn>
            <G.AlarmCount>669</G.AlarmCount>
          </G.ItemLeft>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb2>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb2>
            <G.ItemTxts2>
              <G.ItemTime>5월 15일 (수) 17:00</G.ItemTime>
              <G.ItemTitle2>
                5분만에 뚝! 딱! 완성하는 홈메이드 웰빙 국내산 쌀로 만든
                가마가마가마가마가마가마가마가마
              </G.ItemTitle2>
              <G.Name>NnF</G.Name>
            </G.ItemTxts2>
          </G.ItemRight>
          <G.ItemLeft>
            <G.AlarmBtnActive type='button'></G.AlarmBtnActive>
            <G.AlarmCount>1.5K</G.AlarmCount>
          </G.ItemLeft>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.Thumb2>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb2>
            <G.ItemTxts2>
              <G.TxtInner>
                <G.ItemTime>오늘 11:30</G.ItemTime>
                <G.AlarmCount2>1.5K</G.AlarmCount2>
              </G.TxtInner>
              <G.ItemTitle2>VIPS로 만드는 우리집 레스토랑</G.ItemTitle2>
              <G.Name>NnF</G.Name>
            </G.ItemTxts2>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.ItemWrap>
        <G.ItemTop>
          <G.ItemRight>
            <G.PThumb>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.PThumb>
            <G.ItemTxts>
              {/* <G.PStoreName>쇼핑온보고</G.PStoreName> */}
              <G.PItemTitle>
                제품명을 입력해주세요 제품명을 입력해주세요제품명을 입력해주세요 제품명을
                입력해주세요제품명을 입력해주세요 제품명을 입력해주세요
              </G.PItemTitle>
              <G.NumberWrap>
                <G.PSale>43%</G.PSale>
                <G.PPrice>1,000원</G.PPrice>
              </G.NumberWrap>
            </G.ItemTxts>
          </G.ItemRight>
        </G.ItemTop>
      </G.ItemWrap>

      <G.CalenderItemWrap>
        <G.CalenderWrap>
          <G.CalenderTime>12:00</G.CalenderTime>
          <G.CalenderTxt>내일</G.CalenderTxt>
          <G.CalenderIcon></G.CalenderIcon>
        </G.CalenderWrap>
        <G.ItemTop2>
          <G.ItemLeft>
            <G.Thumb3>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb3>
          </G.ItemLeft>
          <G.ItemRight2>
            <G.ItemTitle3>
              딸기 레인보우 구슬 아이스크림 4종 세트 161616161616161616161616161616161616입
            </G.ItemTitle3>
            <G.CalenderBott>
              <G.CalenderLeft>
                <G.CalenderName>디핀다트</G.CalenderName>
                <G.CalenderAlarm>
                  <G.CalenderCount>1.4K</G.CalenderCount>
                  <G.CalenderView>358</G.CalenderView>
                </G.CalenderAlarm>
              </G.CalenderLeft>
              <G.AlarmBtnActive type='button'></G.AlarmBtnActive>
            </G.CalenderBott>
          </G.ItemRight2>
        </G.ItemTop2>
      </G.CalenderItemWrap>

      <G.CalenderItemWrap>
        <G.CalenderWrap>
          <G.CalenderTime>12:00</G.CalenderTime>
          <G.CalenderTxt>내일</G.CalenderTxt>
          <G.CalenderIcon></G.CalenderIcon>
        </G.CalenderWrap>
        <G.ItemTop2>
          <G.ItemLeft>
            <G.Thumb3>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.Thumb3>
          </G.ItemLeft>
          <G.ItemRight2>
            <G.ItemTitle3>
              나나진나나진 신상/여자/여성/일자/보이핏/와이드팬츠/슬랙스/슬림/청바지/스판/밴딩/봄
              신상/여자/여성/일자/보이핏/와이드팬츠/슬랙스/슬림/청바지/스판/밴딩/봄
            </G.ItemTitle3>
            <G.CalenderBott>
              <G.CalenderLeft>
                <G.CalenderName>디핀다트</G.CalenderName>
                <G.CalenderAlarm>
                  <G.CalenderCount>1.4K</G.CalenderCount>
                  <G.CalenderView>358</G.CalenderView>
                </G.CalenderAlarm>
              </G.CalenderLeft>
              <G.AlarmBtn type='button'></G.AlarmBtn>
            </G.CalenderBott>
          </G.ItemRight2>
        </G.ItemTop2>
      </G.CalenderItemWrap>

      <G.CalenderItemWrap>
        <G.CalenderWrap>
          <G.CalenderTime>12:00</G.CalenderTime>
          <G.CalenderTxt>어제</G.CalenderTxt>
          <G.CalenderIcon></G.CalenderIcon>
        </G.CalenderWrap>
        <G.ItemTop2>
          <G.ItemLeft>
            <G.ThumbEnd>
              <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
            </G.ThumbEnd>
          </G.ItemLeft>
          <G.ItemRight2>
            <G.ItemTitle3>
              나나진나나진 신상/여자/여성/일자/보이핏/와이드팬츠/슬랙스/슬림/청바지/스판/밴딩/봄
              신상/여자/여성/일자/보이핏/와이드팬츠/슬랙스/슬림/청바지/스판/밴딩/봄
            </G.ItemTitle3>
            <G.CalenderBott>
              <G.CalenderLeft>
                <G.CalenderName>디핀다트</G.CalenderName>
                <G.CalenderAlarm>
                  <G.CalenderCount>1.4K</G.CalenderCount>
                  <G.CalenderView>358</G.CalenderView>
                </G.CalenderAlarm>
              </G.CalenderLeft>
              <G.AlarmBtnActive type='button'></G.AlarmBtnActive>
            </G.CalenderBott>
          </G.ItemRight2>
        </G.ItemTop2>
      </G.CalenderItemWrap>

      <Wraps>
        <G.StoreWrap>
          <G.HomeIcon />
          <G.StoreName>플레이보고</G.StoreName>
        </G.StoreWrap>

        <G.StoreWrap>
          <G.HomePurpleIcon />
          <G.StoreName>플레이보고</G.StoreName>
        </G.StoreWrap>

        <G.StoreWrap>
          <G.HomePurpleIcon />
          <G.StoreName>플레이보고</G.StoreName>
          <G.ShippingFee>배송비 : 3,000원</G.ShippingFee>
        </G.StoreWrap>

        <G.StoreWrap>
          <G.StoreName>플레이보고</G.StoreName>
        </G.StoreWrap>
      </Wraps>

      <Wraps>
        <G.StateWrap>
          <G.StoreTxt>
            <G.StoreState>결제실패</G.StoreState>
            <G.StoreDate>2020-09-08 13:32</G.StoreDate>
          </G.StoreTxt>
          <G.StoreBtn></G.StoreBtn>
        </G.StateWrap>

        <G.StateWrap>
          <G.StoreTxt>
            <G.StoreState className='purple'>배송준비중</G.StoreState>
            <G.StoreDate>2020-09-08 13:32</G.StoreDate>
          </G.StoreTxt>
          <G.StoreBtn></G.StoreBtn>
        </G.StateWrap>

        <G.StateWrap>
          <G.StoreTxt>
            <G.StoreState className='blue'>교환신청중</G.StoreState>
            <G.StoreDate>2020-09-08 13:32</G.StoreDate>
          </G.StoreTxt>
          <G.StoreBtn></G.StoreBtn>
        </G.StateWrap>
      </Wraps>

      <Wraps>
        <G.StateWrap className='numberwrap'>
          <G.StoreTxt>
            <G.StoreState>주문번호 A2025292282282</G.StoreState>
            <G.StoreDate>2020-09-08</G.StoreDate>
          </G.StoreTxt>
          <G.StoreBtn></G.StoreBtn>
        </G.StateWrap>
      </Wraps>

      <Wraps>
        <G.GoodsWrap>
          <G.GoodsTxt>주문 상품 정보</G.GoodsTxt>
        </G.GoodsWrap>

        <G.GoodsWrap>
          <G.GoodsTxt>주문 상품 정보</G.GoodsTxt>
          <G.GoodsBtn>변경</G.GoodsBtn>
        </G.GoodsWrap>

        <G.GoodsWrap>
          <G.GoodsTxt>
            주문 상품 정보<G.GoodsTxtPurple>(필수)</G.GoodsTxtPurple>
          </G.GoodsTxt>
        </G.GoodsWrap>

        <G.GoodsWrap>
          <G.GoodsTxt>내역</G.GoodsTxt>
          <G.GoodsGrayBtn>더보기</G.GoodsGrayBtn>
        </G.GoodsWrap>
      </Wraps>

      <Wraps>
        <G.PayContent>
          <G.Item>
            <G.Left>상품금액</G.Left>
            <G.Right>50,000원</G.Right>
          </G.Item>
          <G.Item>
            <G.Left>할인금액</G.Left>
            <G.Right>
              <G.CouponBtn>쿠폰보기</G.CouponBtn>
              -6,000원
            </G.Right>
          </G.Item>
          <G.Item>
            <G.Left>
              배송비
              <G.DeliveryBtn></G.DeliveryBtn>
            </G.Left>
            <G.Right>2,500원</G.Right>
            <G.DelModal DelSee={false}>
              <G.DelModalTop>
                <G.DelModalTit>업체별 배송비 안내</G.DelModalTit>
                <G.DelClose />
              </G.DelModalTop>
              <G.DelModalTexts>
                <G.DelModalText>
                  보고플레이(주)
                  <G.DelText>6,000원</G.DelText>
                </G.DelModalText>
                <G.DelModalText>
                  디핀다트코리아
                  <G.DelText>1,500원</G.DelText>
                </G.DelModalText>
              </G.DelModalTexts>
            </G.DelModal>
          </G.Item>
          <G.Item>
            <G.Left>할인코드 할인</G.Left>
            <G.Right>-3,000원</G.Right>
          </G.Item>
          <G.Item padding={true}>
            <G.LeftBold>총 결제 금액</G.LeftBold>
            <G.RightBold>43,500원</G.RightBold>
          </G.Item>
          <G.Item>
            <G.Left>신용카드</G.Left>
            <G.Right>43,500원</G.Right>
          </G.Item>
          <G.Date>결제일시 2020-09-08 13:32</G.Date>
        </G.PayContent>

        <G.PayContent>
          <G.Item>
            <G.Left>상품금액</G.Left>
            <G.Right>50,000원</G.Right>
          </G.Item>
          <G.Item>
            <G.Left>할인금액</G.Left>
            <G.Right>
              <G.CouponBtn>쿠폰보기</G.CouponBtn>
              -6,000원
            </G.Right>
          </G.Item>
          <G.Item>
            <G.Left>
              배송비
              <G.DeliveryBtn></G.DeliveryBtn>
            </G.Left>
            <G.Right>2,500원</G.Right>
            <G.DelModal DelSee={true}>
              <G.DelModalTop>
                <G.DelModalTit>업체별 배송비 안내</G.DelModalTit>
                <G.DelClose />
              </G.DelModalTop>
              <G.DelModalTexts>
                <G.DelModalText>
                  보고플레이(주)
                  <G.DelText>6,000원</G.DelText>
                </G.DelModalText>
                <G.DelModalText>
                  디핀다트코리아
                  <G.DelText>1,500원</G.DelText>
                </G.DelModalText>
              </G.DelModalTexts>
            </G.DelModal>
          </G.Item>
          <G.Item>
            <G.Left>할인코드 할인</G.Left>
            <G.Right>-3,000원</G.Right>
          </G.Item>
          <G.Item padding={true}>
            <G.LeftBold>총 결제 금액</G.LeftBold>
            <G.RightBold>43,500원</G.RightBold>
          </G.Item>
          <G.Item>
            <G.Left>신용카드</G.Left>
            <G.Right>43,500원</G.Right>
          </G.Item>
          <G.Date>결제일시 2020-09-08 13:32</G.Date>
        </G.PayContent>

        <G.PayContent>
          <G.Item>
            <G.Left>교환 배송비(왕복)</G.Left>
            <G.Right>5,000원</G.Right>
          </G.Item>
          <G.Item>
            <G.Left>제주산간 추가 배송비</G.Left>
            <G.RightPlus>3,000원</G.RightPlus>
          </G.Item>
          <G.Item padding={true}>
            <G.LeftBold>최종 배송비</G.LeftBold>
            <G.RightBold>
              <G.RightEx>(구매자 부담)</G.RightEx>8,000 원
            </G.RightBold>
          </G.Item>
        </G.PayContent>

        {/* 상품권 전용 */}
        <G.PayContent>
          <G.Item>
            <G.Left>상품금액</G.Left>
            <G.Right>50,000원</G.Right>
          </G.Item>
          <G.Item>
            <G.Left>할인금액</G.Left>
            <G.Right>
              <G.CouponBtn>쿠폰보기</G.CouponBtn>
              -6,000원
            </G.Right>
          </G.Item>
          <G.Item>
            <G.Left>배송비</G.Left>
            <G.Right>2,500원</G.Right>
            <G.DelModal DelSee={false}>
              <G.DelModalTop>
                <G.DelModalTit>업체별 배송비 안내</G.DelModalTit>
                <G.DelClose />
              </G.DelModalTop>
              <G.DelModalTexts>
                <G.DelModalText>
                  보고플레이(주)
                  <G.DelText>6,000원</G.DelText>
                </G.DelModalText>
                <G.DelModalText>
                  디핀다트코리아
                  <G.DelText>1,500원</G.DelText>
                </G.DelModalText>
              </G.DelModalTexts>
            </G.DelModal>
          </G.Item>
          <G.Item>
            <G.Left>할인코드 할인</G.Left>
            <G.Right>-3,000원</G.Right>
          </G.Item>
          <G.Item padding={true}>
            <G.LeftBold>상품 취소 금액</G.LeftBold>
            <G.RightBold>43,500원</G.RightBold>
          </G.Item>
          <G.Item>
            <G.Left>보고페이</G.Left>
            <G.Right>43,500원</G.Right>
          </G.Item>
          <G.Date>결제일시 2020-09-08 13:32</G.Date>
        </G.PayContent>
      </Wraps>
      {/*  */}

      <Wraps>
        <G.TxtsWrap>
          <G.TxtsTitle>확인해주세요</G.TxtsTitle>
          <G.Txts>
            ･ 취소 완료 후에는 취소 철회가 불가능합니다. 다시 구매를 원하신다면, 다시 주문해주세요.
          </G.Txts>
        </G.TxtsWrap>
      </Wraps>

      <Wraps>
        <G.TxtsWrap>
          <G.Txts>
            배송 출고 후 4시간 안에 도착할 수 있도록
            <br />
            안전하고 빠른 배송을 진행하겠습니다.
            <br />
            <br />
          </G.Txts>
          <G.TxtsBlackColor>
            배송에 문제가 있는 경우
            <br />
            VOGO 고객센터 <G.TxtsPurpleColor>(1661-0493)</G.TxtsPurpleColor>으로 문의바랍니다.
          </G.TxtsBlackColor>
          <br />
          <br />
          <G.TxtsBlackColor>
            VOGO 고객센터 운영시간
            <br />
            운영시간 : 평일 오전 10시 ~ 오후 5시
            <br />
            점심시간 : 12시 ~ 13시
          </G.TxtsBlackColor>
        </G.TxtsWrap>
      </Wraps>

      <Wraps>
        <G.BorderWrap></G.BorderWrap>
      </Wraps>

      <Wraps>
        <G.StepWrap>
          <G.StepWrapInner>
            <G.Step>
              <G.Icon backgroundColor={true}>1</G.Icon>
              <G.TxtActive>상품선택</G.TxtActive>
            </G.Step>
            <G.Step>
              <G.Icon>2</G.Icon>
              <G.Txt>사유입력</G.Txt>
            </G.Step>
            <G.Step>
              <G.Icon>3</G.Icon>
              <G.Txt>주소입력</G.Txt>
            </G.Step>
            <G.Step>
              <G.IconNone>4</G.IconNone>
              <G.Txt>배송비확인</G.Txt>
            </G.Step>
          </G.StepWrapInner>
        </G.StepWrap>
      </Wraps>

      <Wraps>
        <G.TxtsLeftWrap>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>받는사람</G.TxtsLeftLeft>
            <G.TxtsLeftRight>고유라</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>연락처</G.TxtsLeftLeft>
            <G.TxtsLeftRight>010-1234-5678</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>배송지</G.TxtsLeftLeft>
            <G.TxtsLeftRight>
              서울시 강남구 테헤란로 2길 27 비젼타워 13층 1515번지 486978호
            </G.TxtsLeftRight>
          </G.TxtsLeftItem>
        </G.TxtsLeftWrap>
      </Wraps>

      <Wraps>
        <G.TxtsLeftWrap>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>교환사유</G.TxtsLeftLeft>
            <G.TxtsLeftRight>색상, 사이즈 변경</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>상세사유</G.TxtsLeftLeft>
            <G.TxtsLeftRight>
              취소 상세 사유 입력했을 시 뜨는 텍스트입니다. 취소 상세 사유 입력했을 시 뜨는
              텍스트입니다.{" "}
            </G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft></G.TxtsLeftLeft>
            <G.ImgLeftRight>
              <G.ImgWrap>
                <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
              </G.ImgWrap>
              <G.ImgWrap>
                <G.Img src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
              </G.ImgWrap>
            </G.ImgLeftRight>
          </G.TxtsLeftItem>
        </G.TxtsLeftWrap>
      </Wraps>

      {/* 상품권 전용 */}
      <Wraps>
        <G.TxtsLeftWrap>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>주문자</G.TxtsLeftLeft>
            <G.TxtsLeftRight>홍길동</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>연락처</G.TxtsLeftLeft>
            <G.TxtsLeftRight>010-1234-5678</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>발송일</G.TxtsLeftLeft>
            <G.TxtsLeftRight>2021년 8월 10일</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.GiftCardTxt>*당사 사정에 따라 상품권 발송일이 변경될 수 있습니다.</G.GiftCardTxt>
        </G.TxtsLeftWrap>
      </Wraps>

      <Wraps>
        <G.TxtsLeftWrap>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>주문자</G.TxtsLeftLeft>
            <G.TxtsLeftRight>고유라</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>휴대폰</G.TxtsLeftLeft>
            <G.TxtsLeftRight>010-1234-5678</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.TxtsLeftItem>
            <G.TxtsLeftLeft>이메일</G.TxtsLeftLeft>
            <G.TxtsLeftRight>yura@vogoplay.com</G.TxtsLeftRight>
          </G.TxtsLeftItem>
          <G.GiftCardTxtWrap>
            <G.GiftCardTxtPurple>･ 상품권은 주문자 연락처로 발송됩니다.</G.GiftCardTxtPurple>
            <G.GiftCardTxt2>･ 당사 사정에 따라 상품권 발송일이 변경될 수 있습니다.</G.GiftCardTxt2>
          </G.GiftCardTxtWrap>
        </G.TxtsLeftWrap>
      </Wraps>
      {/*  */}

      <G.VogoItem>
        <G.VogoImgWrap>
          <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
          <G.VogoImg src={`${imgRoutes.thumbnail}/product_default.png`} alt='상품' />
        </G.VogoImgWrap>
        <G.TxtWrap>
          <G.VTxt>크림멜로우 초코 모찌 마시멜로 VS 칵투스 시나몬 크림 바스켓</G.VTxt>
          <G.VNumber>
            <G.VBold>132</G.VBold>명 참여중
          </G.VNumber>
        </G.TxtWrap>
      </G.VogoItem>

      <G.MainTitle>
        <G.TitleTxt>LIVE 핫딜</G.TitleTxt>
      </G.MainTitle>

      <G.MainTitle>
        <G.TitleTxt>LIVE 예고</G.TitleTxt>
        <G.Btn>더보기</G.Btn>
      </G.MainTitle>

      <G.MainTitle>
        <G.TitleTxtQuestion>VOGO싶다</G.TitleTxtQuestion>
        <G.Btn>더보기</G.Btn>
      </G.MainTitle>
    </>
  );
});

export default GoodsGuide;
