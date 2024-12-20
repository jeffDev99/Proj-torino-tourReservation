"use client";
function setCookie(name, value, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  if (typeof document !== "undefined") {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
  }
}
const getCookies = (cookieName) => {
  if (typeof document !== "undefined") {
    return document.cookie
      .split(";")
      .find((token) => token.trim().split("=")[0] === cookieName)
      ?.split("=")[1];
  }
};
const deleteCookie = (cookieName) => {
  if (typeof document !== "undefined") {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};


export { setCookie, getCookies, deleteCookie};
