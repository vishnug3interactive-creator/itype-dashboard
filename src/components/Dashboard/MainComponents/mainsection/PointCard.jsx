import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChildList } from "../../../../features/child/ChildSlice";
import { apiService } from "../../../services/apiService";

function PointCard() {
  const [points, setPoints] = useState([]);

  const dispatch = useDispatch();

  const selectedId = useSelector((state) => state.selectedStudent.selectedId);

  useEffect(() => {
    dispatch(fetchChildList());
  }, [dispatch]);

  const fetchPoints = async () => {
    try {
      const result = await apiService.get(`/student-points/${selectedId}`);

      if (result.success) {
        setPoints([result.data]);
      } else {
        console.log("error fetching data");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (!selectedId) return;
    fetchPoints();
  }, [selectedId]);

//   console.log("points", points);

  return (
    <>
      {points.map((po,index) => (
        <Box key={index}>
          <Box
            component="section"
            sx={{
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
                padding: "2rem",
              }}
            >
              <Box
                sx={{
                  background: "#FFC63A",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star-icon lucide-star"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              </Box>

              <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Urbanist",
                    fontSize: "16px",
                  }}
                >
                  {/* {meter.title} */}
                  Total Points Collected
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#FFC63A",
                    fontFamily: "Urbanist",
                  }}
                >
                  {po?.usedpoints?.points || 0} Points
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default PointCard;
