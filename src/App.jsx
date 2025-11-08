import "./App.css";
import ParentLogin from "./pages/ParentLogin";
import ChildLogin from "./pages/ChildLogin";
import { Routes, Route} from "react-router-dom";
import ParentRegister from "./pages/ParentRegister";
import React from "react";
import DashboardPage from "./pages/DashboardPage";
import OtpPage from "./pages/OtpPage";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<ParentLogin />} />
          <Route path="/child" element={<ChildLogin />} />
          <Route path="/parent" element={<ParentRegister />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          
        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={3000} 
            theme="colored" 
          />
    
    </>
  );
}

export default App;
