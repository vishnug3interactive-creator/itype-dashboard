import { createSlice } from "@reduxjs/toolkit";

const selectedStudentSlice=createSlice({
     name: "selectedStudent",
      initialState: { selectedId: null },
      reducers:{
        setSelectedStudentId:(state,action)=>{
            state.selectedId=action.payload;
        }
      }
})

export const {setSelectedStudentId}=selectedStudentSlice.actions;
export default selectedStudentSlice.reducer