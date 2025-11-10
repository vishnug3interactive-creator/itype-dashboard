import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeperator from "../mainsection/RadialSeperator";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchChildList } from "../../../../features/child/ChildSlice";

function TaskProgress() {

  const[progress,setProgress]=useState("");

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

  const fetchTaskProgress = async () => {
    try {
      const result = await apiService.get(`/get-tasks-count/${selectedId}`);
      console.log("progress:", result);

      if (result.success) {
        setProgress(result.data.data);
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (!selectedId) return;
    fetchTaskProgress();
  }, [selectedId]);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "18px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "18px",
          color: "#242530",
          padding: "5px",
          fontFamily: "Urbanist",
        }}
      >
        Overall Task Progress
      </Typography>
      <Box
        sx={{
          marginTop: "24px",
          padding: "10px",
          width: "177px",
          height: "177px",
        }}
      >
        <CircularProgressbarWithChildren
          value={75}
          text={`${75}/100`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "#922C88D9",
            textColor: "#922C88D9",
          })}
        >
          <RadialSeperator
            count={12}
            style={{
              background: "#922C88D9",
              width: "2px",
              height: `${4}%`,
            }}
          />
        </CircularProgressbarWithChildren>
      </Box>
      <Box>
        <Button
          sx={{
            background: "#922C88",
            textTransform: "none",
            width: "186px",
            height: "37px",
            borderRadius: "100px",
            marginTop: "40px",
            fontFamily: "Urbanist",
          }}
          variant="contained"
        >
          <span>View Here</span>
        </Button>
      </Box>
    </Box>
  );
}

export default TaskProgress;
