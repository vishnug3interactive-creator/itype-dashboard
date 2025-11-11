import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const selectedDateSlice = createSlice({
    name: "selectedDate",
    // initialState: { data: null },
    initialState: { 
        date: dayjs().format("YYYY-MM-DD")
    },
    reducers: {
        setSelectedDate:(state, action) => {
            state.date = dayjs(action.payload).format("YYYY-MM-DD");
        }
    }
});

export const { setSelectedDate } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;