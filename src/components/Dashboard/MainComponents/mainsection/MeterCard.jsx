import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { apiService } from "../../../services/apiService";
import { useDispatch, useSelector } from "react-redux";
import { fetchChildList } from "../../../../features/child/ChildSlice";
import SpeedIcon from "../../../../assets/images/mainicons/speed.png";
import AccuracyIcon from "../../../../assets/images/mainicons/Accuracy.png";
import TextIcon from '../../../../assets/images/mainicons/texticon.png'
import GameIcon from '../../../../assets/images/mainicons/gameicon.png'



function MeterCard() {
  const [taskCounter, setTaskCounter] = useState(null);

  const dispatch = useDispatch();
  const {
    data: childlist,
    loading,
    error,
  } = useSelector((state) => state.studentlist);

  const selectedId = useSelector((state) => state.selectedStudent.selectedId);

  useEffect(() => {
    dispatch(fetchChildList());
  }, [dispatch]);

  console.log("Fetched Child List:", childlist);
  console.log("passing id", selectedId);

  const fetchTaskCounter = async () => {
    try {
      const result = await apiService.get(`/parent/drill-score/${selectedId}`);
      console.log("metercarddata:", result);

      if (result.success) {
        setTaskCounter(result.data.data);
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (!selectedId) return;
    fetchTaskCounter();
  }, [selectedId]);

  const meters = [
  {
    id: 1,
    title: "Speed Drills",
    content: "Measuring your learning outcome.",
    icon: SpeedIcon,
    value:taskCounter?.speedAccDrillCount || 0,
    color:'#01A8DF'

  },
  // {
  //   id: 2,
  //   title: "Accuracy Drills",
  //   content: "Measuring your learning outcome.",
  //   icon: AccuracyIcon,
  //   value: taskCounter?.accuracyDrillCount || 0,
  //   color:'#E52293'
  // },
  {
    id: 3,
    title: "Text Drills",
    content: "Practice improves your touch typing.",
     icon: TextIcon,
    value: taskCounter?.textDrillCount || 0,
     color:'#FF6928'
  },
   {
    id: 3,
    title: "Games",
    content: "Learning and having fun at the same time.",
     icon: GameIcon,
     value:taskCounter?.gameDrillCount  || 0,
     color:'#93C83C'
  },
];

  return (
    <>
      {
        meters.map((meter, index) => (
          <Box  key={meter.id} sx={{ paddingBottom: "5px" }}>
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
                      background: meter.color,
                      borderRadius: "50%",
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img src={meter.icon} alt="Speed" width="24" height="24" />
                  </Box>

                  <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontFamily: "Urbanist",
                        fontSize: "16px",
                      }}
                    >
                      {meter.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#828392",
                        fontFamily: "Urbanist",
                      }}
                    >
                      {meter.content}
                    </Typography>
                  </Box>

                  <div
                    style={{
                      width: 54,
                      height: 54,
                      fontWeight: 700,
                      fontSize: "18px",
                      fontFamily: "Urbanist",
                    }}
                  >
                    <CircularProgressbar
                      value={meter.value}
                      text={`${meter.value}`}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: meter.color,
                        textColor: "#000",
                        textSize: "24px",
                      })}
                    />
                  </div>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ marginTop: "30px", borderColor: "#E0E0E0" }} />
          </Box>
        ))}
    </>
  );
}

export default MeterCard;
