import { Box, Button, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/itype4home.png";
import { NormalTextField } from "../../helpers/FormInputs";
import lockIcon from "../../assets/registerIcons/lock.png";
import EnvelopeIcon from "../../assets/registerIcons/envelope.png";
import { apiService } from "../services/apiService";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/registerIcons/user.png";


function ChildLoginField() {
     const Initial_State = {
            parentcode: "",
            childusername:"",
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
        
          const handleSubmit = async(e) => {
            e.preventDefault();
            if (!validate()) return;
            // alert("Form Submitted");
            const result = await apiService.post("/login", formData);
            
                if (result.success) {
                  console.log("Posted successfully", result.data);
                  alert("Job created successfully");
                } else {
                  console.error("Error posting data:", result.error);
                  alert("Failed to create job!");
                }
          };
        
          const validate = () => {
            const newErrors = {};
            if (!formData.parentcode) newErrors.parentcode = "Parentcode is required";
            if (!formData.password) newErrors.password = "Password is required";
        
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
              Child Login
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                fontFamily: "Poppins",
                lineHeight: "1.75rem",
                color: "#20180fd7",
              }}
            >
             Login with your parent Code, Child Username, and Child Password
            </Typography>
          </Box>
          
           <Box sx={{mt:'1rem'}}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                fontFamily: "Poppins",
                lineHeight: "1.75rem",
                color: "#20180fd7",
              }}
            >
             All details can be accessed from the Parent Portal
            </Typography>
          </Box>
        </Box>
        
        <Box component="form" onSubmit={handleSubmit}>
          
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="parentcode"
              label="Parent Code (from Parent Portal)"
              placeholder="From Parent Portal"
              required
              icon={EnvelopeIcon}
              value={formData.parentcode}
              handleChange={handleChange}
              error={errors.parentcode}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              type="text"
              name="parentcode"
              label="Child Username (e.g.johnsmith - not your email)"
              placeholder="Child Username"
              required
              icon={UserIcon}
              value={formData.parentcode}
              handleChange={handleChange}
              error={errors.parentcode}
            />
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <NormalTextField
              name="password"
              value={formData.password}
              handleChange={handleChange}
              label="Child Password (from Parent Portal)"
              placeholder="Child Password"
              isPassword={true}
              icon={lockIcon}
              error={errors.password}
            />
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
                  "&.Mui-checked": {
                    color: "#922C88",
                  }
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
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Button
              sx={{
                backgroundColor: "#922C88",
                width: "100%",
                color: "white",
                height: "3rem",
                borderRadius: "0.625rem",
                textTransform:'none',
                fontWeight:'600',
                fontSize:'1rem',
                lineHeight:'1.5rem'

              }}
              type="submit"
            >
             Sign in
            </Button>
          </Box>
        </Box>
         <Box sx={{marginTop:'1rem'}}>
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
            marginTop: "1.5rem",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
       <Link to={'/child'}><Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "400",
              fontFamily: "Poppins",
              lineHeight: "1.5rem",
              color:'#09070580'
            }}
          >
            Logging in as a child?
            <span style={{ color: "#922C88",paddingLeft:'10px' }}>Click Here</span>
          </Typography></Link> 
        </Box>
         <Box sx={{ marginTop: "2rem" }}>
          <Link to={'/parent'}>
            <Button
              sx={{
                backgroundColor: "white",
                width: "100%",
                color: "#922C88",
                height: "3rem",
                borderRadius: "0.625rem",
                border:'1px solid #922C88',
                textTransform:'none',
                fontWeight:400

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
  )
}

export default ChildLoginField