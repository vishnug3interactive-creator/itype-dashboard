import logo from "../assets/images/parent-login-page-pic.png";
import { Box } from "@mui/material";
import React from 'react'
import ParentLoginFields from "../components/ParentLogin/ParentLoginFields";

function ParentLogin() {
  
  return (
    <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr",sm:'1fr', md: "1fr 1fr",lg:'1fr 0.8fr' },
          minHeight: "100vh",
          overflow:'hidden'
        }}
      >
        {/* left section */}
         <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          minHeight: { xs: "100vh", md: "auto" },
          height: "100vh",
           padding: { 
            xs: "2rem 1rem", 
            sm: "2rem 2rem",
            md: "2rem 3rem",
            lg: "2rem 4rem"
          },
          overflowY: "auto",
          overflowX: "hidden"
           
          }}>
          <Box sx={{ 
          width: "100%", 
          maxWidth: { xs: "400px", sm: "450px", md: "500px" } 
        }}>
          <ParentLoginFields />
        </Box>
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

