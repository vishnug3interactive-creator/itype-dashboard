import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { apiService } from "../../services/apiService";
import profileImage from "../../../assets/images/righticons/probg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchChildList } from "../../../features/child/ChildSlice";
import { setSelectedStudentId } from "../../../features/child/SelectedChildSlice";
function ProfileCard() {
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

  useEffect(() => {
    if (childlist.length > 0 && !selectedId) {
      dispatch(setSelectedStudentId(childlist[0].id));
    }
  }, [childlist, selectedId, dispatch]);

  if (childlist.length === 0) return <p>No student found</p>;

  return (
    <>
      {childlist.map((student) => (
        <Box
          key={student.id}
          onClick={() => dispatch(setSelectedStudentId(student.id))}
          sx={{
           
            background:
              selectedId === student.id
                ? "linear-gradient(180deg, #922C8880, #922C88)"
                : "none",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 12px",
            gap: 2,
            height: "86px",
            marginBottom: 2,
            border: "1px solid #ECECF3",
          }}
        >
          <Box
            sx={{
              background: "#EDF0F2",
              borderRadius: "50%",
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={student.profile_image_url || profileImage}
              alt={student.full_name}
              width="44"
              height="44"
            />
          </Box>

          <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
            <Typography sx={{ fontWeight: 600, color: "#000" }}>
              {student.full_name}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#555" }}>
              <span>{student.student_code}</span>{" "}
              <span>Age: {student.age}</span>
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                backgroundColor: student.status ? "#b0f1a3ff" : "#ff9a6cff",
                padding: "5px",
                border: student.status
                  ? "1px solid #008000"
                  : "1px solid #DB0000",
                color: student.status ? "#008000" : "#DB0000",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                height: "18px",
              }}
            >
              <span>{student.status ? "Active" : "Inactive"}</span>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default ProfileCard;
