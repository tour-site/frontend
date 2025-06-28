// 📁 src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://bjava.iptime.org:8898", // 개발시 사용
  // baseURL: "http://localhost:8321", // 외부 서버 사용
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance; // ✅ 이 줄 있어야 함!
