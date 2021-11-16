import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as G from "components/shared/styles/goods.style";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { imgRoutes } from "components/shared/common/images";
SwiperCore.use([Pagination]);

const Container = styled.div`
  width: 100%;
  height: auto;
  &::after {
    content: "";
    display: block;
    height: 8px;
    margin: 0 -16px;
    background-color: ${C.GF1F3F5};
  }
`;

export const MainTitle = styled(G.MainTitle)`
  padding-bottom: 8px;
`;

const SSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 43px;
`;

export const SBanner = styled.div`
  height: 324px;
`;

export const SPagination = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  text-align: center;
  .swiper-pagination-bullet {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${C.PVOGO};
    opacity: 0.3;
    &:not(:last-child) {
      margin-right: 9px;
    }
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

const LiveSchedule = memo(() => {
  const [liveSchedule, setLiveSchedule] = useState([]);
  // console.log(liveSchedule);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "SCOUTER=xkhvir0ta5f1e");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://devapi.vogoplay.com/api/main/pre_livecast?Key=AIzaSyCkr0UI65tFw4YmpfHl9bPPwbS4Ae6I4zA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setLiveSchedule(result))
      .catch((error) => console.log("error", error));
  }, []);

  const handleImgError = (e) => {
    e.target.src = `${imgRoutes.thumbnail}/product_default.png`;
  };

  // useEffect(() => {
  //   if (liveSchedule.length !== 0) {
  //     console.log(liveSchedule.data.list);
  //     liveSchedule.data.list.map((item, a) => {
  //       console.log("aaaaa : " + a);
  //       // console.log(item);
  //       if (a % 3 === 0) {
  //         console.log("bbbbb : " + a);
  //         console.log("=========================================");
  //         liveSchedule.data.list.map((item, b) => {
  //           // 0 >= 1
  //           if (b >= a && b < a + 3) {
  //             console.log("ccccc : " + b);
  //           }
  //           return b;
  //         });
  //       }
  //       return a;
  //     });
  //   }
  // }, [liveSchedule]);

  // useEffect(() => {
  //   for (var i = 2; i < 10; i++) {
  //     console.log(i + "단");
  //     for (var a = 1; a < 10; a++) {
  //       console.log(i + "*" + a + "=" + i * a);
  //     }
  //   }

  //   const num1 = [2, 3, 4, 5, 6, 7, 8, 9];
  //   const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //   num1.map((num1) => {
  //     console.log(num1 + "단");
  //     num2.map((num2) => {
  //       console.log(num1 + "*" + num2 + "=" + num1 * num2);
  //     });
  //   });

  //   for (var b = 0; b < num1.length; b++) {
  //     console.log(num1[b]);
  //   }

  //   const aaa = 1;
  //   console.log("aaa : " + aaa);
  //   let bbb = 2;
  //   bbb = 3;
  //   console.log("bbb : " + bbb);
  //   {
  //   var ccc = 3;
  //   let ddd = 5;
  //   }
  //   console.log("ccc : " + ccc);
  //   console.log("ddd : " + ddd);
  // });

  return (
    <div>
      {liveSchedule.length !== 0 && (
        <Container>
          <MainTitle>
            <G.TitleTxt>LIVE 예고</G.TitleTxt>
            <G.Btn>더보기</G.Btn>
          </MainTitle>
          <SSwiper
            className='banner__swiper'
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              el: ".banner__pagination",
              clickable: true,
            }}
            navigation={true}
          >
            <SPagination className='banner__pagination' />
            {liveSchedule.data.list.map(
              (item, index) =>
                index % 3 === 0 && (
                  <SwiperSlide key={item.livecastSeq}>
                    <SBanner>
                      {liveSchedule.data.list.map(
                        (item, itemIndex) =>
                          itemIndex >= index &&
                          itemIndex < index + 3 && (
                            <G.ItemWrap key={item.livecastSeq}>
                              <G.ItemTop>
                                <G.ItemRight>
                                  <G.Thumb2>
                                    <G.Img
                                      src={`${item.imgPath}`}
                                      alt='상품'
                                      onError={handleImgError}
                                    />
                                  </G.Thumb2>
                                  <G.ItemTxts2>
                                    <G.TxtInner>
                                      <G.ItemTime>
                                        {item.resDate}
                                        {item.weekName}
                                        {item.resTime}
                                      </G.ItemTime>
                                      <G.AlarmCount2>{item.pushCnt}</G.AlarmCount2>
                                    </G.TxtInner>
                                    <G.ItemTitle2>{item.title}</G.ItemTitle2>
                                    <G.Name>{item.providerName}</G.Name>
                                  </G.ItemTxts2>
                                </G.ItemRight>
                              </G.ItemTop>
                            </G.ItemWrap>
                          )
                      )}
                    </SBanner>
                  </SwiperSlide>
                )
            )}
          </SSwiper>
        </Container>
      )}
    </div>
  );
});

export default LiveSchedule;
