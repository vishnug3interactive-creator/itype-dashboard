import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/itype4home.png";
import { NormalTextField } from "../../helpers/FormInputs";
import EnvelopeIcon from "../../assets/registerIcons/envelope.png";
import { Link } from "react-router-dom";

function ForgetComponent() {
  const Initial_State = {
    email: "",
  };

  const [formData, setFormData] = useState(Initial_State);
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

 
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            width: "30.688rem",
          }}
        >
          <Box
            sx={{
              marginTop: "2.5rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  lineHeight: "2.75rem",
                  color: "#090705",
                }}
              >
                Forget Password
              </Typography>
            </Box>
            <Box sx={{ marginTop: "1.5rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  lineHeight: "1.75rem",
                  color: "#20180fd7",
                }}
              >
                Enter the email address associated with your account and we will
                send you a link to reset your password.
              </Typography>
            </Box>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ marginTop: "1.5rem" }}>
              <NormalTextField
                type="text"
                name="email"
                placeholder="Enter Email"
                required
                icon={EnvelopeIcon}
                value={formData.email}
                handleChange={handleChange}
                error={errors.email}
              />
            </Box>

            <Box sx={{ marginTop: "2rem" }}>
              <Button
                sx={{
                  backgroundColor: "#922C88",
                  width: "100%",
                  color: "white",
                  height: "3rem",
                  borderRadius: "0.625rem",
                  textTransform: "none",
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                }}
                type="submit"
              >
                Continue
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "1.5rem",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Link to={"/"}>
              {" "}
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  lineHeight: "1.5rem",
                  color: "#922C88",
                }}
              >
                Back to Sign in
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ForgetComponent;
