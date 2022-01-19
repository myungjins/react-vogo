import React, { useEffect, useState } from "react";
import { exhibitionApi } from "service/exhibitionApi";
import NewYearTemplates from "templates/event/newYear";
import useQuery from "utils/useQuery";
import { useUserContext } from "store/userContext";

export interface IGoodsList {
  discountCardCode: string;
  goodsName: string;
  goodsNo: number;
  image: string;
  interest: boolean;
  linkPrice: number;
  liveStatus: null | string;
  livecastSeq: number;
  marketPrice: number;
  point: null | string;
  price: number;
  resDate: string;
  resTime: string;
  reviewCnt: null | number;
  stock: null | number;
  title: null | string;
}

export interface IGoodTab {
  idx: number;
  list: IGoodsList[];
  name: string;
  current: boolean;
}

const NewYear = () => {
  const { user } = useUserContext(); //context는 컴포넌트안에서 전역적으로 데이터를 공유하도록 나온 개념입니다
  const userNo = user === null ? 0 : user; // user  null 이면 0, null 아니면 user 데이터를 가져옴

  const eventIdx = useQuery().get("eventIdx"); // eventIdx 이벤트 아이디 캐싱&리프레쉬

  const [goodsTab, setGoodsTab] = useState<IGoodTab[]>([]); // IGoodTab 초기화.    // 첫번째 값은 현재 상태 값 변수 , 두번째 값은 상태 값을 갱신해주는 Setter 함수
  const [goodsList, setGoodsList] = useState([]); // [] 배열의 초기화

  useEffect(() => {
    // console.log(eventIdx); // useEffect 컴포넌트가 렌더링 될 때마다 특정 작업을 실행 할 수 있도록 하는 hook
    try {
      // try 컴포넌트 내부에 예상치 못한 에러가 생기면 해결 할 수 있는 문법
      exhibitionApi.exhibition(Number(eventIdx), Number(userNo)).then((result) => {
        // exhibition api 에서 기획전 id 값 가져온다.
        const { meta, data } = result.data; // exhibition data 값

        // console.log(result);
        // console.log(meta.errCode); //0
        // console.log(data.list);

        if (meta.errCode === 0) {
          const tab = data.list.map((item: IGoodTab, index: number) => {
            // map 으로 tab data list 를 반복한다

            // console.log(index);

            if (index === 0) {
              // console 찍으니까 0,1,2,3 나옴
              return { ...item, current: true }; // 0부터 tab 시작
            } else {
              return { ...item, current: false };
            }
          });
          setGoodsTab(tab);

          const goods = data.list.map((item: IGoodTab) => {
            // console.log(item.list);

            return item.list; //  tab list item array
          });
          setGoodsList(goods);
        } else {
          console.log(meta.errMsg);
        }
      });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventIdx, userNo]);

  return (
    <>
      <NewYearTemplates goodsTab={goodsTab} setGoodsTab={setGoodsTab} goodsList={goodsList} />
    </>
  );
};

export default NewYear;
