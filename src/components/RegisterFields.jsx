import { Box, Button, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/images/itype4home.png";
import { NormalTextField } from "../helpers/FormInputs";
import lockIcon from "../assets/registerIcons/lock.png";
import UserIcon from "../assets/registerIcons/user.png";
import EnvelopeIcon from "../assets/registerIcons/envelope.png";
import PhoneIcon from "../assets/registerIcons/phone.png";

function RegisterFields() {
  const Initial_State = {
    fullname: "",
    phonenumber: "",
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form Submitted");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname){
      newErrors.fullname = "Full Name is required";
    }else if(formData.fullname.trim().length<2){
        newErrors.fullname="Full Name must be at least 2 characters"
    }
    if (!formData.phonenumber){
      newErrors.phonenumber = "PhoneNumber is required";
    }
    else if(!/^[0-9]{10}$/.test(formData.phonenumber.replace(/[\s-]/g, ''))){
        newErrors.phonenumber="Please enter a valid 10-digit phone number";
    }
    if (!formData.email)
    {
         newErrors.email = "Email is required";
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
         newErrors.email = "Please enter a valid email address";
    }
   if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
    newErrors.password = "Password must contain uppercase, lowercase, and number";
  }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //   console.log(formData);
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
          marginLeft: "9.125rem",
          marginRight: "9.125rem",
          marginTop: "4rem",
          marginBottom: "4rem",
           width:'26.688rem'
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
              name="fullname"
              placeholder="Full Name"
              required
              icon={UserIcon}
              value={formData.fullname}
              handleChange={handleChange}
              error={errors.fullname}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              required
              icon={PhoneIcon}
              value={formData.phonenumber}
              handleChange={handleChange}
              error={errors.phonenumber}
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
          <Box sx={{ marginTop: "1rem" }}>
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
          </Box>
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
              }}
              type="submit"
            >
              Register
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
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "500",
              fontFamily: "Poppins",
              lineHeight: "1.5rem",
            }}
          >
            Already have an account?
            <span style={{ color: "#922C88",paddingLeft:'10px' }}>Sign In</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterFields;
