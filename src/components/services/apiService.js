import axiosInstance from "./axiosInstance";

export const apiService = {
  post: async (url, data, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      };
    }
  },


};