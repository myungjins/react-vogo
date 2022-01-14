import React, { createContext, useContext, useEffect, useState } from "react";
import { mypageApi } from "service/mypageApi";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("userNo") || null));
  const [rute, setRute] = useState(JSON.parse(sessionStorage.getItem("rute") || null));
  const [beginTime, setBeginTime] = useState(sessionStorage.getItem("beginTime") || new Date());

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("userNo", JSON.stringify(user));
      sessionStorage.setItem("rute", JSON.stringify(rute));
    } else {
      sessionStorage.removeItem("userNo");
      sessionStorage.removeItem("rute");
    }
    sessionStorage.setItem("beginTime", beginTime);
  }, [user, rute, beginTime]);

  return (
    <UserContext.Provider value={{ user, setUser, rute, setRute, beginTime, setBeginTime }}>
      {children}
    </UserContext.Provider>
  );
};

const MypageInfoContext = createContext();
export const useMypageInfoContext = () => useContext(MypageInfoContext);

export const MypageInfoContextProvider = ({ children }) => {
  const { user } = useUserContext();
  const [myInfo, setMyInfo] = useState([]);
  const [myInfoUpdate, setMyInfoUpdate] = useState([]);

  useEffect(() => {
    if (user === null) return;

    try {
      mypageApi.mypageInfo(user).then((result) => {
        const { data, meta } = result.data;
        if (meta.errCode === 0) {
          setMyInfo(data);
        } else {
          console.log(meta.errMsg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [user, myInfoUpdate]);

  return (
    <MypageInfoContext.Provider value={{ myInfo, setMyInfoUpdate, setMyInfo }}>
      {children}
    </MypageInfoContext.Provider>
  );
};

const BrowserContext = createContext();
export const useBrowserContext = () => useContext(BrowserContext);

export const BrowserContextProvider = ({ children }) => {
  useEffect(() => {
    let agent = navigator.userAgent.toLowerCase();
    if (
      (navigator.appName === "Netscape" && navigator.userAgent.search("Trident") !== -1) ||
      agent.indexOf("msie") !== -1
    ) {
      alert(
        "인터넷 익스플로러 브라우저에서는 오류가 발생할 수 있습니다. 타 브라우저를 이용해주세요!"
      );
    }
  }, []);

  return <BrowserContext.Provider value=''>{children}</BrowserContext.Provider>;
};
