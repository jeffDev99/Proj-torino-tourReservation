// react library
import axios from "axios";
// my components
import { getCookies, setCookie } from "../utils/cookies";

// functions for use cookies in the server
const safeGetCookies = (cookieName) => {
  if (typeof window !== "undefined") {
    return getCookies(cookieName);
  }
  return null; 
};
const safeSetCookies = (token) => {
  if (typeof window !== "undefined") {
    setCookie(token);
  }
};


// axios instance with interceptors
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    const accessToken = safeGetCookies("accessToken");
    if (accessToken) {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    console.log(originalRequest);
    console.log(err);
    if (err?.response?.status === 401 && originalRequest?._retry !== true) {
      originalRequest._retry = true;
      const res = await getNewToken();
      if (res?.response?.status === 201) {
        safeSetCookies("accessToken", res?.response?.data?.accessToken, 30);
        safeSetCookies("refreshToken", res?.response?.data?.refreshToken, 360);
        return api(originalRequest);
      } else {
        safeSetCookies("accessToken", "", 0);
        safeSetCookies("refreshToken", "", 0);
      }
    } else {
      return Promise.reject(err);
    }
  }
);

const getNewToken = async () => {
  const refreshToken = getCookies("refreshToken");
  if (!refreshToken) return;
  try {
    const res = await api.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
      refreshToken,
    });
    return { res };
  } catch (error) {}
  safeSetCookies("accessToken", res.data.accessToken, res.data.expiresIn);
  return res.data.accessToken;
};

export default api;
