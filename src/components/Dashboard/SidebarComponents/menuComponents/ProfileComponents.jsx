import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProfileIcon from "../../../../assets/images/sidebaricons/Frame.png";
import ArrowIcon from "../../../../assets/images/sidebaricons/Chevrondown.png";

function ProfileComponents() {
  const [profileData, setProfileData] = useState("");

      useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setProfileData(parsedData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } 
  }, []);

  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: "0.625rem",
        gap: 2,
        height: "3.313rem",
        backgroundColor: "#F7F7F7",
        border: "1px solid #ECECF3",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
         
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          paddingLeft:'10px',
          
        }}
      >
        <img src={ProfileIcon} alt="Speed" width="30" height="30" />
      </Box>

      <Box sx={{ flexGrow: 1}}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px",fontFamily:'Urbanist' }}>
         {profileData?.first_name || "User"}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#666",fontFamily:'Urbanist' }}>
        {profileData.email}
        </Typography>
      </Box>

      <Box sx={{ paddingRight:'18.5px'}}>
        <img src={ArrowIcon}></img>
      </Box>
    </Box>
  );
}

export default ProfileComponents;
