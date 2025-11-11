import { Box, Typography } from "@mui/material";
import React from "react";
import WelcomeComponent from "./mainsection/WelcomeComponent";
import TaskProgress from "./mainsection/TaskProgress";
import MetersComponent from "./mainsection/MetersComponent";
import Cardview from "./mainsection/Cardview";
import PointCard from "./mainsection/PointCard";

function MainSection() {
  return (
    <Box sx={{ p:"20px" }}>
      <Box>
        <WelcomeComponent />
      </Box>
      
      <Box
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          gap: "2",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <Box
          sx={{
            border: "white",
            background: "#ffffff",
            borderRadius: "24px",
          }}
        >
          <TaskProgress />
        </Box>
       <Box sx={{display:'flex',flexDirection:'column'}}>
         <Box
          sx={{
            marginLeft: "20px",
            background: "#ffffff",

            borderRadius: "24px",
          }}
        >
        <PointCard/>
        </Box>
         <Box
          sx={{
            marginLeft: "20px",
            background: "#ffffff",
            marginTop:'1rem',
            borderRadius: "24px",
          }}
        >
          <MetersComponent />
        </Box>
       </Box>
       

        
      </Box>

      {/* bottom section */}
      <Box>
        <Cardview />
      </Box>
    </Box>
  );
}

export default MainSection;
