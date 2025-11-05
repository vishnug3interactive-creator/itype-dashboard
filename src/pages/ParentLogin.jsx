import logo from "../assets/images/parent-login-page-pic.png";
import { Box } from "@mui/material";
import React from 'react'
import ParentLoginFields from "../components/ParentLogin/ParentLoginFields";

function ParentLogin() {
  

  return (
    <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 0.8fr" },
          minHeight: "90vh",
          overflow:'hidden'
        }}
      >
        {/* left section */}
         <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height: "100vh",
          overflowX: "auto",
           
          }}>
           <ParentLoginFields/>
        </Box>

      {/* right section */}
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
   
       
      </Box>
  )
}

export default ParentLogin
