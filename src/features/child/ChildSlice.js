import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../components/services/apiService";

export const fetchChildList = createAsyncThunk(
  "childList/fetch",
  async () => {
    try {
      const userData = localStorage.getItem("userData");
      const parsedUserData = userData ? JSON.parse(userData) : null;

      const parentId = parsedUserData?.parent_id;

      const result = await apiService.get(`/parent/${parentId}/student-list`);
      if (result.success) {
        return result.data.data;
      } else {
        console.log("error")
      }
    } catch (error) {
       console.log("Error fetching student list");
    }
  }
);

const childSlice = createSlice({
  name: "studentlist",
  initialState:{
  data: [],
  loading: false,
  error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChildList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChildList.fulfilled, (state, action) => {

        state.loading = false;
        state.data =action.payload;
      })
    
      .addCase(fetchChildList.rejected, (state, action) => {
        state.loading = false;
         state.error = action.payload || "Failed to fetch child list";
      });
  },
});

export default childSlice.reducer;
