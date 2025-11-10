import { configureStore } from "@reduxjs/toolkit";
import childReducer from '../features/child/ChildSlice'
import  selectedStudentReducer  from "../features/child/SelectedChildSlice";

export const store=configureStore({
    reducer:{
     studentlist:childReducer,
     selectedStudent:selectedStudentReducer,

    }
})