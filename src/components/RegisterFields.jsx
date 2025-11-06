import { Box, Button, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/images/itype4home.png";
import { NormalTextField } from "../helpers/FormInputs";
import lockIcon from "../assets/registerIcons/lock.png";
import UserIcon from "../assets/registerIcons/user.png";
import EnvelopeIcon from "../assets/registerIcons/envelope.png";
import PhoneIcon from "../assets/registerIcons/phone.png";
import PostalIcon from '../assets/registerIcons/landmark.svg'
import { apiService } from "./services/apiService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterFields() {
  const Initial_State = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    postal_code: "",
    password: "",
  };
  const [formData, setFormData] = useState(Initial_State);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const result = await apiService.post("/register", formData);

    if (result.success) {
      // console.log("Account Created successfully", result.data);
      toast.success("User Registered successfully");
    } else {
      // console.error("Error posting data:", result.error);
      toast.error("Failed to Register!");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) {
      newErrors.first_name = "Full Name is required";
    } else if (formData.first_name.trim().length < 2) {
      newErrors.first_name = "Full Name must be at least 2 characters";
    }
    if (!formData.last_name) {
      newErrors.last_name = "Last Name is required";
    }
    if (!formData.phone) {
      newErrors.phone = "phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.postal_code) {
      newErrors.postal_code = "Postal Code is required";
    } else if (formData.postal_code.trim().length < 6) {
      newErrors.postal_code = "Postal Code must be at least 6 characters";
    }

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
        {/* logo */}
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
              Sign Up for an Account
            </Typography>
          </Box>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ marginTop: "2.75rem" }}>
            <NormalTextField
              type="text"
              name="first_name"
              placeholder="Full Name"
              required
              icon={UserIcon}
              value={formData.first_name}
              handleChange={handleChange}
              error={errors.first_name}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              icon={UserIcon}
              value={formData.last_name}
              handleChange={handleChange}
              error={errors.last_name}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="phone"
              placeholder="Phone Number"
              prefix="+61"
              required
              icon={PhoneIcon}
              value={formData.phone}
              handleChange={handleChange}
              error={errors.phone}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="postal_code"
              placeholder="Enter Zip"
              required
              icon={PostalIcon}
              value={formData.postal_code}
              handleChange={handleChange}
              error={errors.postal_code}
            />
          </Box>
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
          {/* <Box sx={{ marginTop: "1rem" }}>
            <Typography
              sx={{
                fontSize: "0.813rem",
                fontWeight: "400",
                fontFamily: "Poppins",
                lineHeight: "1.25rem",
              }}
            >
              Your password must have at least 8 characters
            </Typography>
          </Box> */}
          <Box
            sx={{
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Checkbox
                {...label}
                sx={{
                  padding: "0 9px 0 0",
                  color: "#922C88",
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
              By creating an account means you agree to the<br></br>
              <Box
                component="span"
                sx={{ color: "#922C88", cursor: "pointer" }}
              >
                Terms & Conditions
              </Box>{" "}
              and our{" "}
              <Box
                component="span"
                sx={{ color: "#922C88", cursor: "pointer" }}
              >
                Privacy Policy
              </Box>
            </Typography>
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
              Sign Up
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
                fontWeight: "400",
                fontFamily: "Poppins",
                lineHeight: "1.5rem",
              }}
            >
              Already have an account?
              <span style={{ color: "#922C88", paddingLeft: "10px" }}>
                Sign In
              </span>
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterFields;
