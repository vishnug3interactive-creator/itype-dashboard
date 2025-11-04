import React, { useState } from "react";
import parentlogo from "../assets/images/parent-login-page-pic.png";
import logo from "../assets/images/newbanner.png";
import { Box } from "@mui/material";
import RegisterFields from "../components/RegisterFields";

function ParentRegister() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.8fr 1fr" },
          minHeight: "90vh",
          overflow:'hidden'
        }}
      >
        {/* left section */}
        <Box sx={{ width: "100%", height:'100vh',
            display: { xs: "none", md: "block" } ,
            position:'sticky',
            top:0}}>
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Logo"
          />
        </Box>
        {/* form section */}
        <Box sx={{
            height: "100vh",
            overflowY: "auto",
           
          }}>
            <RegisterFields/>
        </Box>
      </Box>
    </>
  );
}

export default ParentRegister;
