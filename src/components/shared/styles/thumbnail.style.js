import styled from "styled-components";
import * as C from "components/shared/common/colors";
import * as F from "components/shared/common/fontSize";
import { ROBOTO } from "components/shared/common/fontFamily";
import { imgRoutes } from "components/shared/common/images";

export const ThumbnailWrap = styled.div`
  width: 49%;
  margin-top: 20px;
  &:not(:first-child) {
    margin-left: 2%;
  }
  &:nth-child(odd) {
    margin-left: 0;
  }
`;

export const ThumbnailBox = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 510px;
  width: 100%;
  height: 75vw;
  padding: 8px;
  border-radius: 4px;
`;

export const Thumbnail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 33, 37, 0) 0%,
      rgba(0, 33, 37, 0.02) 33%,
      rgba(0, 33, 37, 0.02) 55%,
      rgba(0, 33, 37, 0.6) 100%
    );
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

export const LiveBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Live = styled.i`
  width: 58px;
  height: 20px;
  margin-right: 2px;
  background: url("${imgRoutes.common}/ic_live.png") no-repeat center/contain;
`;

export const LiveViewerBox = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 7px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const LiveViewer = styled.i`
  width: 20px;
  height: 20px;
  background: url("${imgRoutes.common}/ic_live_viewer.png") no-repeat center/contain;
`;

export const LiveViewerNum = styled.span`
  font-family: ${ROBOTO};
  font-size: ${F.Xsmall};
  font-weight: 500;
  color: #fafafa;
  line-height: 1;
`;

export const Time = styled.p`
  font-size: ${F.SPRIMARY};
  color: ${C.WHITE};
  font-weight: 500;
  font-family: ${ROBOTO};
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const GoodsBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 8px;
  cursor: pointer;
`;

export const GoodsThumbnail = styled.div`
  overflow: hidden;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid ${C.WHITE};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GoodsInfo = styled.div`
  width: calc(100% - 55px);
  font-weight: bold;
  text-shadow: 0.2px 0.4px 0 rgba(0, 0, 0, 0.85);
  color: ${C.WHITE};
`;

export const GoodsName = styled.p`
  overflow: hidden;
  width: 100%;
  margin-bottom: 5px;
  font-size: ${F.SPRIMARY};
  color: ${C.WHITE};
  font-weight: bold;
  line-height: 16px;
  letter-spacing: -0.4px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const GoodsPrices = styled.div`
  display: flex;
  align-items: center;
  font-family: ${ROBOTO};
`;

export const Discount = styled.span`
  margin-right: 5px;
  color: ${C.YELLOW};
  &::after {
    content: "%";
  }
`;

export const Price = styled.span`
  margin-right: 5px;
  &::after {
    content: "원";
  }
`;

export const DefaultPrice = styled.del`
  color: #c8c8c8;
  &::after {
    content: "원";
  }
`;

export const SellerBox = styled.div``;

export const Seller = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 5px;
  font-size: ${F.Xsmall};
  font-weight: bold;
`;

export const SellerProfile = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 6px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 1px #c8c8c850;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SellerName = styled.div``;

export const SellerTitle = styled.p`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-size: ${F.SPRIMARY};
  line-height: 1.38;
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ViewIcon = styled.i`
  width: 23px;
  height: 23px;
  margin-right: 3px;
  background: url("${imgRoutes.common}/ic_live_viewer.png") no-repeat center/contain;
`;

export const ViewIconHeart = styled(ViewIcon)`
  background: url("${imgRoutes.common}/ic_heart_white.png") no-repeat center/contain;
`;

export const ViewText = styled.p`
  font-family: ${ROBOTO};
  font-size: 11px;
  color: ${C.WHITE};
`;

export const Date = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: ${C.GACB5BD};
`;
