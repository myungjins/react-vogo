const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_API_URL}`, // 비즈니스 서버 URL 설정
      changeOrigin: false,
    })
  );
  app.use(
    "/json",
    createProxyMiddleware({
      target: "https://ipapi.co",
      changeOrigin: false,
    })
  );
};
