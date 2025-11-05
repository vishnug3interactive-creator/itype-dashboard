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
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 0.8fr" },
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* left section */}
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 0,
          }}
        >
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Logo"
          />
        </Box>
        {/* form section */}
        <Box
          sx={{
            
  
            justifyContent: "center",
            alignItems: "center",
            minHeight: { xs: "100vh", md: "auto" },
            height: "100vh",
            padding: {
              xs: "2rem 1rem",
              sm: "2rem 2rem",
              md: "2rem 3rem",
              lg: "2rem 4rem",
            },
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
             
            }}
          >
            {" "}
            <RegisterFields />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ParentRegister;
