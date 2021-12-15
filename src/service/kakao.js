const CLIENT_ID = "f6e9068b399becf0b3ccc722f8cbab54";
const REDIRECT_URI = "http://localhost:3000/user";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
