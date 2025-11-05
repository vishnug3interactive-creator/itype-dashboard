
import axios from "axios";
// import { BASE_URL } from "../../config/apiConfig";

const axiosInstance = axios.create({
//   baseURL: BASE_URL,
  baseURL: 'http://52.62.65.5/api/',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");
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