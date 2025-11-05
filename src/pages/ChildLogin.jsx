import React, { useState } from "react";
import childbanner from "../assets/images/student-wombat.png";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { Box } from "@mui/material";
import ChildLoginField from "../components/ChildLogin/ChildLoginField";


function ChildLogin() {
  return (
    <>
    <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 0.8fr" },
         
          overflow:'hidden'
        }}
      >
        {/* left section */}
         <Box sx={{
       
          display:'flex',
          justifyContent:'center',
          height: "100vh",
          overflowX: "auto",
           
          }}>
            <ChildLoginField/>
        </Box>

      {/* right section */}
        <Box sx={{ width: "100%", height:'100vh',
            display: { xs: "none", md: "block" } ,
            position:'sticky',
            top:0}}>
          <img
            src={childbanner}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Logo"
          />
        </Box>
   
       
      </Box>
    </>
  
  );
}

export default ChildLogin;
