import { Box, Typography } from '@mui/material'
import React from 'react'
import MeterIcon from "../../../../assets/images/mainicons/metericon.png";
import ProfileIcon from "../../../../assets/images/mainicons/profile.png";
import GuideIcon from "../../../../assets/images/mainicons/guideline.png";


function Cardview() {
  return (
     <Box sx={{ display: "grid", gridTemplateColumns: "2fr 2fr 2fr" }}>
          <Box
            sx={{
              background: "white",
              height: "144px",
              borderRadius: "10px",
              padding: "16px",
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#EDF0F2",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img src={MeterIcon} alt="Speed" width="24" height="24" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: "700", fontSize: "16px", color: "#242530",fontFamily:'Urbanist' }}
              >
                See Progress
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#828392",
                  mt: "12px",
                  fontFamily:'Urbanist'
                }}
              >
                Exciting news! You’ve won a prize.
              </Typography>
            </Box>
          </Box>
          {/* second box */}
          <Box
            sx={{
              background: "white",
              height: "144px",
              borderRadius: "10px",
              padding: "16px",
              marginLeft: "20px",
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#EDF0F2",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img src={ProfileIcon} alt="Speed" width="24" height="24" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: "700", fontSize: "16px", color: "#242530",fontFamily:'Urbanist' }}
              >
                Something broken?
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#828392",
                  mt: "12px",
                  fontFamily:'Urbanist'
                }}
              >
                Get technical support here
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              background: "white",
              height: "144px",
              borderRadius: "10px",
              padding: "16px",
              marginLeft: "20px",
            }}
          >
            <Box>
              <Box
                sx={{
                  background: "#EDF0F2",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img src={GuideIcon} alt="Speed" width="24" height="24" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "start",
                flexDirection: "column",
                paddingTop: "16px",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: "700", fontSize: "16px", color: "#242530",fontFamily:'Urbanist' }}
              >
                Lost your way?
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#828392",
                  mt: "12px",
                  fontFamily:'Urbanist'
                }}
              >
                Read guidelines here
              </Typography>
            </Box>
          </Box>
        </Box>
  )
}

export default Cardview
