import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Divider from "@mui/material/Divider";
import React from "react";


function MeterCard({ meters }) {
  return (
    <Box sx={{ paddingBottom: "5px" }}>
      <Box>
        <Box
          component="section"
          sx={{
            height: "53px",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              background: "white",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              height: "86px",
            }}
          >
            <Box
              sx={{
                background: meters.color,
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <img src={meters.icon} alt="Speed" width="24" height="24" />
            </Box>
            
            <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
              <Typography sx={{ fontWeight: 700,fontFamily:'Urbanist',fontSize:'16px' }}>{meters.title}</Typography>
              <Typography sx={{ fontSize: "14px", color: "#828392",fontFamily:'Urbanist' }}>
                {meters.content}
              </Typography>
            </Box>

            <div style={{ width: 54, height: 54,fontWeight: 700 ,fontSize: "18px",fontFamily:'Urbanist'}}>
              <CircularProgressbar
                value={meters.value}
                  text={`${meters.value}%`}
                 strokeWidth={10}
                styles={buildStyles({
                  pathColor: meters.color,
                  textColor: '#000',
                  textSize:'24px',
             
                })}
              />
            </div>
          </Box>
        </Box>
       
      </Box>
       <Divider sx={{ marginTop: "30px", borderColor: "#E0E0E0" }} />
    </Box>
  );
}

export default MeterCard;
