import { Box, Typography } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import profileicon from "../../../assets/images/righticons/probg.png";
import dotframe from "../../../assets/images/righticons/dotframe.png";
import greendot from "../../../assets/images/righticons/greendot.png";
import reddot from "../../../assets/images/righticons/reddot.png";
import Calender from "./Calender";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./ProfileCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import fillicon from "../../../assets/images/righticons/fillicon.png";

const profiles = [
  {
    id: "ST001",
    name: "James Cooper",
    age: 14,
    status: "Active",
    icon: profileicon,
    dotIcon: dotframe,
    statusIcon: greendot,
    color: "linear-gradient(to top, #922C88, #fc64efbe 80%)",
    textcolor: "#ffffff",
  },
  {
    id: "ST002",
    name: "Lisa Bryson",
    age: 10,
    status: "inactive",
    icon: profileicon,
    dotIcon: dotframe,
    statusIcon: reddot,
    color: "#ffffff",
    textcolor: "#000000",
  },
  {
    id: "ST003",
    name: "John Carter",
    age: 15,
    status: "Active",
    icon: profileicon,
    dotIcon: dotframe,
    statusIcon: greendot,
    color: "#ffffff",
    textcolor: "#000000",
  },
];


function RightSection() {
  return (
      <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Box sx={{ paddingTop: "24px" }}>
        <Typography sx={{ fontWeight: 700, fontSize: "18px",fontFamily:'Urbanist' }}>
          Student List
        </Typography>
      </Box>

      <Box>
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </Box>

      <Box>
        <Calender />
      </Box>
      <Divider />
      <Box>
        <Box sx={{ paddingTop: "24px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "18px",fontFamily:'Urbanist' }}>
            Today, 23 Jan 2024
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid #ECECF3",
            borderRadius: "20px",
            marginTop: "16px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F7F7F7",
              padding: "10px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "18px",fontFamily:'Urbanist' }}>
              <img src={fillicon} style={{ marginRight: "10px" }}></img>
              <span style={{ fontSize: "14px", fontWeight: "400",fontFamily:'Urbanist' }}>
                10:32:10 - 10:32:50
                <span style={{ fontWeight: "800",fontFamily:'Urbanist' }}>(0m 40s)</span>
              </span>
            </Typography>
          </Box>

          {/* mainbox */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              padding: "12px",
            }}
          >
            {/* first col */}
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "8px" }}
            >
              <Box>
                <Typography sx={{ fontWeight: 500, fontSize: "14px",fontFamily:'Urbanist' }}>
                  WPM
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "28px",fontFamily:'Urbanist' }}>
                  50
                </Typography>
              </Box>
            </Box>
            {/* second col */}
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "8px" }}
            >
              <Box>
                <Typography sx={{ fontWeight: 500, fontSize: "14px",fontFamily:'Urbanist' }}>
                  Error
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "28px",fontFamily:'Urbanist' }}>
                  8
                </Typography>
              </Box>
            </Box>
            {/* third col */}
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "8px" }}
            >
              <Box>
                <Typography sx={{ fontWeight: 500, fontSize: "14px",fontFamily:'Urbanist' }}>
                  Accuracy
                </Typography>
              </Box>
              <Box>
                <Box sx={{ fontWeight: 700 ,fontSize: "18px",fontFamily:'Urbanist'}}>
                  <div style={{ width: 54, height: 54 }}>
                    <CircularProgressbar
                      value={8}
                      text="8%"
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: "orange",
                        textColor: "#000",             
        
                      })}
                    />
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RightSection