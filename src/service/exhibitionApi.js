import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/exhibition`,
  headers: { os: process.env.REACT_APP_OS, version: process.env.REACT_APP_VERSION },
});

export const exhibitionApi = {
  exhibition: (idx, userNo) => api.get("/", { params: { idx, userNo } }),
  exhibitionV2: (idx, userNo) => api.get("/v2", { params: { idx, userNo } }),
};
