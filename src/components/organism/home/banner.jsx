import React from "react";
import styled from "styled-components";
import * as C from "components/shared/common/colors";
import { ROBOTO } from "components/shared/common/fontFamily";
import { Xsmall } from "components/shared/common/fontSize";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { imgRoutes } from "components/shared/common/images";
SwiperCore.use([Pagination, Autoplay]);

const SSwiper = styled(Swiper)`
  position: relative;
  margin: 0 -16px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 10px;
    border-radius: 10px 10px 0px 0px;
    background-color: ${C.WHITE};
  }
`;

export const SBanner = styled.div`
  max-height: 390px;
  height: calc(55vw + 10px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${C.GF1F3F5};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SPagination = styled.div`
  z-index: 999;
  display: block;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 16px;
  left: unset;
  transform: translateX(0px);
  padding: 6px 10px;
  font-size: ${Xsmall};
  color: ${C.WHITE};
  font-weight: 500;
  font-family: ${ROBOTO};
  background-color: rgba(37, 37, 37, 0.5);
  border-radius: 12px;
  line-height: 10px;
  &::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 4px;
    background: url("${imgRoutes.common}/ic_plus_white.png") center center/contain no-repeat;
  }
`;

export default function Banner() {
  return (
    <SSwiper
      className='banner__swiper'
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        type: "fraction",
        el: ".banner__pagination",
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SPagination className='banner__pagination' />
      <SwiperSlide>
        <SBanner>
          <Img src={`${imgRoutes.banner}/default.png`} alt='default img' />
        </SBanner>
      </SwiperSlide>
      <SwiperSlide>
        <SBanner>
          <Img src={`${imgRoutes.banner}/default.png`} alt='default img' />
        </SBanner>
      </SwiperSlide>
      <SwiperSlide>
        <SBanner>
          <Img src={`${imgRoutes.banner}/default.png`} alt='default img' />
        </SBanner>
      </SwiperSlide>
    </SSwiper>
  );
}
