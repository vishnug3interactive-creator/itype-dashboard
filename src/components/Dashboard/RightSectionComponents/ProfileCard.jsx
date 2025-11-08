import React from "react";
import { Box, Typography } from "@mui/material";

function ProfileCard({ profile }) {
  return (
    <Box
      sx={{
        background:profile.color,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 12px",
        gap: 2,
        height: "86px",
        marginBottom: 2,
        border: "1px solid #ECECF3",
      }}
    >
      <Box
        sx={{
          background: "#EDF0F2",
          borderRadius: "50%",
          width: 54,
          height: 54,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          
        }}
      >
        <img src={profile.icon} alt={profile.name} width="44" height="44" />
      </Box>

     
      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <Typography sx={{ fontWeight: 600, color: profile.textcolor ,fontFamily:'Urbanist'}}>
          {profile.name}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: profile.textcolor,fontFamily:'Urbanist' }}>
          <span>{profile.id}</span>
          <img
            src={profile.dotIcon}
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
            alt="dot"
          />
          <span>Age: {profile.age} Yrs</span>
        </Typography>
      </Box>
      
     {profile.status === "Active" ? (
  <>
 <Box>
        <Box
          sx={{
            backgroundColor: "#b0f1a3ff",
            padding: "5px",
            border: "1px solid #008000",
            color: "#008000",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            height:'18px',
            fontFamily:'Urbanist'
          }}
        >
          <img src={profile.statusIcon} alt="status" />
          <span>{profile.status}</span>
        </Box>
      </Box>
  </>
) : (
  <Box>
        <Box
          sx={{
            backgroundColor: "#ff9a6cff",
            padding: "5px",
            border: "1px solid #DB0000",
            color: "#DB0000",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
             height:'18px'
          }}
        >
          <img src={profile.statusIcon} alt="status" />
          <span>{profile.status}</span>
        </Box>
      </Box>
)}
    </Box>
  );
}

export default ProfileCard;
