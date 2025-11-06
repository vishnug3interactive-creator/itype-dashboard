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
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr", lg: "1fr 0.8fr" },
          minHeight: "100vh",
        }}
      >
        {/* left section */}
        <Box
          sx={{
             display:'flex',
            justifyContent: "center",
            alignItems:"flex-start",
            minHeight: { xs: "100vh", md: "auto" },
            height: "100vh",
            padding: {
              xs: "2rem 1rem",
              sm: "2rem 2rem",
              md: "2rem 3rem",
              lg: "2rem 4rem",
            },
            overflowY: "auto",
             overflowX: "hidden"
          }}
        >
          <Box
            sx={{
              width: "100%",
               maxWidth: { xs: "400px", sm: "450px", md: "500px" },
            }}
          >
            <ChildLoginField />
          </Box>
        </Box>

        {/* right section */}
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
            src={childbanner}
            style={{width: "100%", height: "100%", objectFit: "cover" }}
            alt="Logo"
          />
        </Box>
      </Box>
    </>
  );
}

export default ChildLogin;
