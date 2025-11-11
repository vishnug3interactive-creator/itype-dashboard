
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import MeterCard from "./MeterCard";
import React from "react";

function MetersComponent() {
  return (
    <>
      <Box >
        
            <Box sx={{padding:'20px'}}>
                <MeterCard  />
        </Box>
      </Box>
    </>
  );
}

export default MetersComponent;
