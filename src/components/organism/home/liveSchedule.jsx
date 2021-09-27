import React, { memo } from "react";
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
  border-bottom: 8px solid ${C.GF1F3F5};
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
  return (
    <>
      <Container>
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
          <SwiperSlide>
            <SBanner>
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
            </SBanner>
          </SwiperSlide>
          <SwiperSlide>
            <SBanner></SBanner>
          </SwiperSlide>
        </SSwiper>
      </Container>
    </>
  );
});

export default LiveSchedule;
