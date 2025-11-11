import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Calender from "./Calender";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./ProfileCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import fillicon from "../../../assets/images/righticons/fillicon.png";
import { useSelector } from "react-redux";
import { apiService } from "../../services/apiService";
import dayjs from "dayjs";

function RightSection() {
  const selectedDate = useSelector((state) => state.selectedDate.date);
  const selectedId = useSelector((state) => state.selectedStudent.selectedId);

  const [performanceData, setPerformanceData] = useState("");

  const getActivityPerformace = async () => {
    try {
      const result = await apiService.get(
        `/get-activity-performance/${selectedId}/${selectedDate}`
      );

      if (result.success) {
        setPerformanceData(result.data);
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (!selectedId) return;
    getActivityPerformace();
  }, [selectedId, selectedDate]);


  return (
    <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Box sx={{ paddingTop: "24px" }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "18px", fontFamily: "Urbanist" }}
        >
          Student List
        </Typography>
      </Box>

      <Box>
        <ProfileCard />
      </Box>

      <Box>
        <Calender />
      </Box>
      <Divider />
      <Box>
        <Box sx={{ paddingTop: "24px" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "18px", fontFamily: "Urbanist" }}
          >
            {dayjs(selectedDate).isSame(dayjs(),"day") && "Today - "}
            {dayjs(selectedDate).format("MMM DD, YYYY")}
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
            <Box>
              <img src={fillicon} style={{ marginRight: "10px" }}></img>
            </Box>
            <Typography
              sx={{ fontWeight: 700, fontSize: "18px", fontFamily: "Urbanist" }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Urbanist",
                }}
              >
                {performanceData?.data?.text_drill_counts
                  ?.total_spend_time_seconds ? (
                  <span style={{ fontWeight: "800", fontFamily: "Urbanist" }}>
                   Total time spend  (
                    {Math.floor(
                      performanceData.data.text_drill_counts
                        .total_spend_time_seconds / 60
                    )}
                    m{" "}
                    {performanceData.data.text_drill_counts
                      .total_spend_time_seconds % 60}
                    s)
                  </span>
                ) : null}
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
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Urbanist",
                  }}
                >
                  WPM
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "28px",
                    fontFamily: "Urbanist",
                  }}
                >
                  {performanceData?.data?.text_drill_counts?.word_per_min || 0}
                </Typography>
              </Box>
            </Box>
            {/* second col */}
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "8px" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Urbanist",
                  }}
                >
                  Error
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "28px",
                    fontFamily: "Urbanist",
                  }}
                >
                  {performanceData?.data?.text_drill_counts?.avg_missed_key ||
                    0}
                </Typography>
              </Box>
            </Box>
            {/* third col */}
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "8px" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Urbanist",
                  }}
                >
                  Accuracy
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                    fontFamily: "Urbanist",
                  }}
                >
                  <div style={{ width: 54, height: 54 }}>
                    <CircularProgressbar
                      value={
                        performanceData?.data?.text_drill_counts
                          ?.accuracy_percentage || 0
                      }
                      text={`${
                        Number(
                          performanceData?.data?.text_drill_counts
                            ?.accuracy_percentage
                        ) || 0
                      }%`}
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
  );
}

export default RightSection;
