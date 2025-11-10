
import axios from "axios";
import { BASE_URL } from "../../config/apiConfig";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access_token");
    
    if (!token) {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const parsedData = JSON.parse(userData);
        token = parsedData?.access_token;
      }
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
   
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
// export { BASE_URL };