import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import otplogo from "../../assets/images/otplogo.jpg";
import { MuiOtpInput } from "mui-one-time-password-input";
import { apiService } from "../services/apiService";
import { useNavigate } from "react-router-dom";

function OtpComponent() {
  const [otp, setOtp] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedId = sessionStorage.getItem("user_id");
    setUserId(storedId);
  }, []);

  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    getIpAddress();
  }, []);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    const payload = {
      id: userId,
      otp: otp,
      ip_address: ipAddress,
    };
    try {
      const response = await apiService.post("/verify-otp", payload);

      if (response.data) {
        navigate("/dashboard");
      } else {
        alert(response.data?.message || "Invalid OTP, please try again.");
      }
    } catch {
      console.error("Error:", error);
      alert("Something went wrong while verifying OTP.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#928f8b54",
      }}
    >
      <Box
        sx={{
          width: "50rem",
          height: "30rem",
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: "0.5rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Poppins",
          }}
        >
          <Box>
            <img src={otplogo} width="200px" height="200px"></img>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1rem" }}
            >
              Email two factor authentication
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "400", marginTop: "1rem" }}
            >
              Your verification code has been sent to .<span>email</span>
              Please enter it below to login to dashboard
            </Typography>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              gap={2}
              length={6}
              renderSeparator={<span>-</span>}
              TextFieldsProps={{
                size: "small",
                sx: {
                  width: "40px",
                  "& input": {
                    padding: "10px",
                    fontSize: "1rem",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Button
                sx={{ textTransform: "none", color: "orange" }}
                variant="text"
              >
                Back to Login
              </Button>
            </Box>
            <Box>
              <Button sx={{ textTransform: "none" }} variant="text">
                Resend Verification Code
              </Button>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={handleVerifyOtp}
              sx={{
                color: "white",
                backgroundColor: "#922C88",
                textTransform: "none",
                padding: "10px",
                fontWeight: "400",
                height: "50px",
              }}
            >
              Verify and Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OtpComponent;
