import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/sidebaricons/itype4home logo.png";
import ProfileComponents from "./menuComponents/ProfileComponents";
import MenuList from "../../../components/Dashboard/SidebarComponents/menuComponents/MenuList";
import PrizeComponent from "./menuComponents/PrizeComponent";
function SidebarMain() {
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "#FFFFFF",
          // paddingLeft: "1rem",
          // paddingRight: "1rem",
          paddingX:'1rem',
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            alignItems:"center",
            marginTop: "1rem",
            marginBottom: "rem",
          }}
        >
          <Box sx={{display:'flex',justifyContent:'center',pb:'26px'}}>
          <img src={logo}></img>
          </Box>
          
          <ProfileComponents />

          <MenuList />

        </Box>
        <Box>
         <PrizeComponent />
        </Box>
      </Box>
    </>
  );
}

export default SidebarMain;

