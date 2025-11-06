import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import otplogo from "../../assets/images/otplogo.jpg";
import { MuiOtpInput } from "mui-one-time-password-input";
import { apiService } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function OtpComponent() {
  const [otp, setOtp] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [loginData, setLoginData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = sessionStorage.getItem("loginData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLoginData(parsedData);
    } else {
      toast.error("Session expired. Please log in again.");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        setIpAddress(data.ip);
      } catch (error) {
        // console.error("Error fetching IP:", error);
      }
    };
    getIpAddress();
  }, []);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleVerifyOtp = async () => {
    if (!loginData) {
      toast.error("Session expired. Please log in again.");
      navigate("/");
      return;
    }

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    if (!ipAddress) {
      toast.error("Unable to get IP address. Please try again.");
      return;
    }

    const payload = {
      id: loginData.id,
      otp: otp,
      ip_address: ipAddress,
    };

    try {
      const response = await apiService.post("/verify-otp", payload);

      if (response.success) {
        if (loginData.rememberMe) {
          localStorage.setItem("userData", JSON.stringify(response.data));
        } else {
          sessionStorage.setItem("userData", JSON.stringify(response.data));
        }
        sessionStorage.removeItem("loginData");
        navigate("/dashboard");
      } else {
        toast.error(response.data?.message || "Invalid OTP, please try again.");
      }
    } catch (error) {
      // console.error("Error verifying OTP:", error);
      toast.error("Something went wrong while verifying OTP.");
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
        padding: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "50rem" },
          maxWidth: "50rem",
          height: "auto",
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: "0.5rem",
          // paddingLeft: "3rem",
          // paddingRight: "3rem",
          padding: { xs: "2rem 1.5rem", sm: "2.5rem 2rem", md: "3rem" },
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
          <Box  sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
                fontWeight: "bold",
                marginTop: "1rem",
                px: { xs: 1, sm: 2 },
                fontFamily:'Poppins'
              }}
            >
              Email two factor authentication
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              sx={{ fontWeight: "400", marginTop: "1rem", px: { xs: 1, sm: 2 }, 
              fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" }, }}
            >
              Your verification code has been sent to
              <span
                style={{
                  color: "blue",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                }}
              >
                {loginData?.email}
              </span>
              .Please enter it below to login to dashboard
            </Typography>
          </Box>
          <Box
            sx={{
              padding: { xs: "1rem 0", sm: "1rem" },
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              gap={2}
              length={6}
              renderSeparator={<span>-</span>}
              TextFieldsProps={{
                // size: "small",
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
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              width: "100%",
              gap: { xs: 1, sm: 0 },
              px: { xs: 1, sm: 0 },
            }}
          ><Link to={'/'}>
            <Box>
               <Button
                sx={{
                  textTransform: "none",
                  color: "orange",
                  width: { xs: "100%", sm: "auto" },
                }}
                variant="text"
              >
                Back to Login
              </Button>
            </Box>
              </Link>
            <Box>
              <Button
                sx={{
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                }}
                variant="text"
              >
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
                fontWeight: "400",
                height: "50px",
                padding: { xs: "10px 20px", sm: "10px 24px" },
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
