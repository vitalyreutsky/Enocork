import vars from "../_vars";

export const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    vars.htmlEl.classList.add("page--android");

    console.log("мы в телефоне");

    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    vars.htmlEl.classList.add("page--ios");

    console.log("мы на планшете");

    return "iOS";
  }

  return "unknown";
};
