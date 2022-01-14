import React, { memo, useState } from "react";
import styled from "styled-components";
import { PVOGO, WHITE } from "components/shared/common/colors";
import { NOTO, ROBOTO } from "components/shared/common/fontFamily";
import { MEDIUM, SPRIMARY, Xsmall } from "components/shared/common/fontSize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IGoodTab, IGoodsList } from "page/event/newYear";
import { comma } from "utils/number";
import { checkAgent } from "utils/agent";
import { useHistory } from "react-router";
import { imgRoutes } from "components/shared/common/images";

const Container = styled.section`
  position: relative;
  margin: 0 -16px;
  padding-top: 48px;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 92px;
    width: 100%;
    height: 2px;
    background-color: #ebf0f2;
  }
`;

const TabBox = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const Tab = styled.button<{ eventCurrent: boolean }>`
  position: relative;
  padding: 0 0 10px;
  text-align: left;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &::after {
    content: "";
    display: ${(props) => (props.eventCurrent ? "inline-block" : "none")};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    z-index: 10;
  }
`;

const TabText = styled.span<{ eventCurrent: boolean }>`
  overflow: hidden;
  display: inline-block;
  width: auto;
  max-width: 170px;
  padding: 5px 11px;
  font-size: ${SPRIMARY};
  font-weight: ${(props) => (props.eventCurrent ? 700 : 500)};
  color: ${(props) => (props.eventCurrent ? WHITE : "#888")};
  background-color: ${(props) => (props.eventCurrent ? PVOGO : "#ddd")};
  border-radius: 37px;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 36px 9px;
  padding: 24px 16px 72px;
  background-color: ${WHITE};
`;

const Item = styled.div`
  justify-items: stretch;
`;

const Img = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  span {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
  }
`;

const SLazyLoadImage = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 22px;
  border-radius: 4px;
  font-family: ${ROBOTO};
  font-size: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const StockOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  font-size: ${MEDIUM};
  font-weight: bold;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TextBox = styled.div``;

const Title = styled.p`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px 0;
  font-size: ${Xsmall};
  color: #5c5c5c;
  word-break: break-word;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${ROBOTO};
`;

const Price = styled.p<{ eventLink: boolean; eventStockOut: boolean }>`
  margin-right: 4px;
  font-size: ${Xsmall};
  color: ${(props) => (props.eventLink ? PVOGO : props.eventStockOut ? "#c8c8c8" : "#000")};
  font-weight: bold;
`;

const Del = styled.del`
  font-size: 10px;
  color: #c8c8c8;
`;

const NotoSans = styled.span`
  font-family: ${NOTO};
`;

interface IProps {
  goodsTab: IGoodTab[]; //현재값 tab data
  setGoodsTab: React.Dispatch<React.SetStateAction<IGoodTab[]>>; // setGoodsTab 상태를 업데이트 하는 기능
  goodsList: Array<[]>;
}

const Goods = memo(({ goodsTab, setGoodsTab, goodsList }: IProps) => {
  const history = useHistory(); // onclick 이벤트 걸어서 경로 변경
  const date = new Date(); // 오늘 날짜
  const os = checkAgent(); //브라우저 종류 확인
  const [select, setSelect] = useState(0); //select 초기값 0

  // console.log(date);
  // console.log(select);
  // console.log(goodsTab);
  // console.log(setGoodsTab); // 무슨값이지..?
  console.log(goodsList);

  const handleTab = (tab: IGoodTab, index: number) => {
    if (!tab.current) {
      //IGoodTab current 값이 맞지 않다면
      const tabChange = goodsTab.map((it) => {
        // console.log(it); // 탭 클릭시 tab.idx (current) 값과 반대

        if (it.idx === tab.idx) {
          // idx 같으면 tab 활성화 됨
          setSelect(index); // 선택한 index 값이 보임
          return { ...tab, current: true }; // tab 활성화 됨
        }
        return { ...it, current: false }; // tab 비활성화 됨
      });
      setGoodsTab(tabChange); // 탭 값이 변한다.
    }
  };

  const handleLink = (goods: IGoodsList) => {
    // https://developer111.tistory.com/37?category=948844
    const browserInfo = navigator.userAgent; //브라우저 종류 확인

    if (
      browserInfo.indexOf("[APP_WISHROOM_Android]") > -1 || //browserInfo.indexOf("[APP_WISHROOM_Android]") console 에서 안보임..
      browserInfo.indexOf("APP_WISHROOM_IOS") > -1
    ) {
      if (os === "android") {
        window.location.href = `vogoplay://detail?goodsSeq=${goods.goodsNo}`; // 웹에서 앱으로 앱 스키마 리디렉션 할때 (android)
        return;
      } else if (os === "ios") {
        window.location.href = `vogoplay://detail?goodsSeq=${goods.goodsNo}`; // 웹에서 앱으로 앱 스키마 연결할때 (ios))
        return;
      }

      return;
    }

    history.push({
      pathname: "/goods", //경로 name
      search: `?gno=${goods.goodsNo}`,
    });
  };

  return (
    <Container>
      <TabBox>
        {goodsTab.map((item, index) => (
          <Tab
            type='button'
            key={item.idx}
            onClick={() => handleTab(item, index)}
            eventCurrent={item.current} // current true false로 탭 활성화 비활성화 구분
          >
            {/* {console.log(item.current)} */}
            <TabText eventCurrent={item.current}>{item.name}</TabText>
          </Tab>
        ))}
      </TabBox>
      {goodsList.length !== 0 &&
        goodsList.map(
          (item, index) =>
            select === index && ( // select 와 index 값이 같다면
              <Items key={index}>
                {console.log(index)}
                {item.map((list: IGoodsList) => (
                  <Item key={list.goodsNo}>
                    <Img onClick={() => handleLink(list)}>
                      {/* 클릭시 goods detail 페이지 보여줌 */}
                      <SLazyLoadImage
                        src={list.image}
                        alt={list.goodsName}
                        threshold={100}
                        effect='blur'
                        placeholderSrc={`${imgRoutes.common}/default.png`} //	이미지가 표시되지 않거나 로드되지 않는 동안 표시할 이미지 src입니다.
                        onError={(e: any) => {
                          e.target.src = `${imgRoutes.common}/default.png`;
                        }}
                      />
                      {/* slice 배열 자르기 (상품이 배열이라 slice를 쓴거 같다.)*/}
                      {new Date( // 오늘 날짜
                        Number(list.resDate.slice(0, 4)), // 2022
                        Number(list.resDate.slice(5, 7)) - 1, // 01
                        Number(list.resDate.slice(8, 10)), // 04
                        Number(list.resTime.slice(0, 2)), // 17
                        Number(list.resTime.slice(3, 5)), // 45
                        0
                      ).getTime() > date.getTime() ? ( // 상품 날짜와 오늘 날짜를 비교해서 상품 날짜가 더 크면 방송예정, 아니면 품절.
                        <ComingSoon>{`${list.resDate} ${list.resTime} 방송 예정`}</ComingSoon>
                      ) : (
                        list.stock !== 1 && <StockOut>품절</StockOut>
                        // 콘솔 확인 해보니까.. stock null값.... 뭐지..
                      )}
                      {/* {console.log(list.resTime)} 17:45 */}
                      {/* {console.log(list.resDate)} 2022-01-04 */}
                      {/* {console.log(list.stock! !== 1)} {true} */}
                    </Img>
                    <TextBox>
                      <Title>{list.goodsName}</Title>
                      <PriceBox>
                        <Price
                          eventLink={list.discountCardCode === "12"} //discountCardCode 12면 링크
                          eventStockOut={
                            new Date(
                              Number(list.resDate.slice(0, 4)), //
                              Number(list.resDate.slice(5, 7)) - 1,
                              Number(list.resDate.slice(8, 10)),
                              Number(list.resTime.slice(0, 2)),
                              Number(list.resTime.slice(3, 5)),
                              0
                            ).getTime() <= date.getTime() && list.stock !== 1
                          } //품절이면 상품날짜 비교해서 상품날짜가 더 크면 방송예정, 아니면 품절
                        >
                          {console.log(list)}
                          {console.log(list.discountCardCode === "12")}
                          {list.discountCardCode === "12" // discountCardCode true = link , false = 일반상품
                            ? comma(list.linkPrice)
                            : comma(list.price)}
                          원
                        </Price>
                        {list.marketPrice !== 0 && ( // 0원이면 안뜸
                          <Del>
                            {comma(list.marketPrice)} <NotoSans>원</NotoSans>
                          </Del>
                        )}
                      </PriceBox>
                    </TextBox>
                  </Item>
                ))}
              </Items>
            )
        )}
    </Container>
  );
});

export default Goods;
