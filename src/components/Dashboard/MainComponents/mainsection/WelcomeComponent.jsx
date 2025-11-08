import React from "react";
import { Box, Typography } from "@mui/material";
import welcome from "../../../../assets/images/mainicons/welcomelogo.png";
import bgvector from "../../../../assets/images/Group.png"

function WelcomeComponent() {

  return (
    <Box
      sx={{
        height: "314px",
        backgroundColor: "#922C88",
        borderRadius: "24px",
        backgroundImage:`url(${bgvector})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        //  backgroundPositionX:'0px',
        // backgroundPositionY:'30px',
        
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ paddingTop: "44px", paddingLeft: "44px", paddingRight: "44px" }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontWeight: "700", fontSize: "32px", color: "#ffffff",fontFamily:"Urbanist"}}
          >
            Welcome back Patricia!
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#ffffff",
              mt: "12px",
              fontFamily:'Urbanist'
            }}
          >
            Exciting news! You’ve won a prize.
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontWeight: "500px", fontSize: "16px", color: "#ffffff" , fontFamily:'Urbanist'}}
          >
            Tap the button below to claim your prize!
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
        >
          <img src={welcome}></img>
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomeComponent;
