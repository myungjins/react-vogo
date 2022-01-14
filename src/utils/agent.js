export const checkAgent = () => {
  //브라우저 종류 확인
  let mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());
  let currentOS;
  if (mobile) {
    let userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.search("android") > -1) currentOS = "android";
    else if (
      userAgent.search("iphone") > -1 ||
      userAgent.search("ipod") > -1 ||
      userAgent.search("ipad") > -1
    )
      currentOS = "ios";
  } else {
    currentOS = "nomobile";
  }
  return currentOS;
};
