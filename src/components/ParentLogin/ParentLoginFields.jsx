import { Box, Button, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/itype4home.png";
import { NormalTextField } from "../../helpers/FormInputs";
import lockIcon from "../../assets/registerIcons/lock.png";
import EnvelopeIcon from "../../assets/registerIcons/envelope.png";
import { apiService } from "../services/apiService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CheckBoxField } from "../../helpers/FormInputs";

function ParentLoginFields() {
  const Initial_State = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState(Initial_State);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: e.target.checked,
    }));
  };

  const [errors, setErrors] = useState({});


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const result = await apiService.post("/login", formData);

    if (result.success) {
      sessionStorage.setItem(
        "loginData",
        JSON.stringify({
          ...result.data,
          rememberMe: formData.rememberMe,
        })
      );
      toast.success("Otp sent to registered mail");
      navigate("/otp");
    } else {
      const errorMessage = result.error?.message || "Failed to login!";
      toast.error(errorMessage);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    toast.error("Something went wrong. Please try again later.");
  }
};

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
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
            marginTop: "4rem",
            marginBottom: "4rem",
            width: "30.688rem",
          }}
        >
          <Box sx={{ width: "8.19rem", height: "2rem" }}>
            <img src={logo} alt="logo" />
          </Box>
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
                Parent Login
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  lineHeight: "1.75rem",
                  color: "#09070580",
                }}
              >
                Welcome back! please enter your details
              </Typography>
            </Box>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ marginTop: "1rem" }}>
              <NormalTextField
                type="text"
                name="email"
                placeholder="Email Address"
                required
                icon={EnvelopeIcon}
                value={formData.email}
                handleChange={handleChange}
                error={errors.email}
              />
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <NormalTextField
                name="password"
                value={formData.password}
                handleChange={handleChange}
                placeholder="Enter password"
                isPassword={true}
                icon={lockIcon}
                error={errors.password}
              />
            </Box>

            {/* <Box
              sx={{
                marginTop: "1.5rem",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Box>

                <Checkbox
                  {...label}
                  checked={formData.rememberMe}
                 onChange={handleCheckboxChange}
                  sx={{
                    padding: "0 9px 0 0",
                    "&.Mui-checked": {
                      color: "#922C88",
                    },
                  }}
                />

              </Box>
              <Typography
                sx={{
                  fontSize: "0.813rem",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  lineHeight: "1.25rem",
                }}
              >
                Remember me
              </Typography>
            </Box> */}

            <CheckBoxField
              checked={formData.rememberMe}
              onChange={handleCheckboxChange}
              label="Remember me"
            />

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
                Sign in
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "500",
                fontFamily: "Poppins",
                lineHeight: "1.5rem",
                color: "#922C88",
              }}
            >
              Forget Password?
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Link to={"/child"}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  lineHeight: "1.5rem",
                  color: "#09070580",
                }}
              >
                Logging in as a child?
                <span style={{ color: "#922C88", paddingLeft: "10px" }}>
                  Click Here
                </span>
              </Typography>
            </Link>
          </Box>
          <Box sx={{ marginTop: "1.5rem" }}>
            <Link to={"/parent"}>
              <Button
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  color: "#922C88",
                  height: "3rem",
                  borderRadius: "0.625rem",
                  border: "1px solid #922C88",
                  textTransform: "none",
                  fontWeight: 400,
                }}
                type="submit"
              >
                Don't Have An Account? Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ParentLoginFields;
