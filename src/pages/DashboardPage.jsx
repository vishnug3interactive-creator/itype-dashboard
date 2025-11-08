import { Box, Typography } from "@mui/material";
import React from "react";
import SidebarMain from "../components/Dashboard/SidebarComponents/SidebarMain";
import MainSection from "../components/Dashboard/MainComponents/MainSection";
import RightSection from "../components/Dashboard/RightSectionComponents/RightSection";

function DashboardPage() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3.28fr 1.48fr ",
        fontFamily: "Urbanist",
      }}
    >
      <Box>
        <SidebarMain />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          borderRadius: "2rem",
        }}
      >
        <MainSection />
      </Box>
      <Box >
        <RightSection />
      </Box>
    </Box>
  );
}

export default DashboardPage;
