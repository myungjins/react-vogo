import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/mypage`,
  headers: { os: process.env.REACT_APP_OS, version: process.env.REACT_APP_VERSION },
});

export const mypageApi = {
  goodsList: (userNo, page) => api.get(`v2/goods_list?userNo=${userNo}&page=${page}`),
};
