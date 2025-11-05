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
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 0.8fr" },
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* left section */}
        <Box
          sx={{
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
              marginTop:'4rem'
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
