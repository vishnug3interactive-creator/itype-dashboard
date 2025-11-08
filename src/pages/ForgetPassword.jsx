import { Box } from '@mui/material'
import React from 'react'
import logo from "../assets/images/newbanner.png";
import ForgetComponent from '../components/ForgetPassword/ForgetComponent';

function ForgetPassword() {
  return (
   <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 0.8fr" },
          minHeight: "100vh",
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
            
            display:'flex',
            justifyContent: "center",
            alignItems:'center',
            minHeight:'100vh',
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
              maxWidth: { xs: "400px", sm: "450px", md: "500px" },
            }}
          >
            {" "}
          <ForgetComponent/>
          </Box>
        </Box>
      </Box>
   </>
  )
}

export default ForgetPassword