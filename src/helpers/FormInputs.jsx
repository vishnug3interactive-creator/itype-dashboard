import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const NormalTextField = ({
  name,
  label,
  value,
  handleChange,
  placeholder,
  minLength,
  isNumber = false,
  isPassword = false,
  error,
  icon,
  prefix,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (isPassword) {
      return showPassword ? "text" : "password";
    }
    return isNumber ? "number" : "text";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.5rem",
            color: "#4B5563",
            fontFamily: "Poppins",
          }}
        >
          {label}
        </Typography>
      )}
      <Box
        sx={{
          height: "3.5rem",
          border: "1px solid #D1D5DB",
          borderRadius: "0.5rem",
          color: "#090705B2",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          background: "#F5F6FA",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {prefix && (
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "#090705B2",
                marginLeft: icon ? "2rem" : "0",
                marginRight: "-1rem",
                fontWeight: 500,
              }}
            >
              {prefix}
            </Typography>
          )}
          <Box
            component="input"
            type={getInputType()}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            minLength={minLength}
            sx={{
              width: "100%",
              // height: "100%",
              border: "none",
              outline: "none",
              boxShadow: "none",
              fontSize: "0.875rem",
              marginLeft: "2rem",
              padding: "0",
              backgroundColor: "transparent",
              // paddingRight: isPassword ? '2.5rem' : '0',
              "&:focus": {
                outline: "none",
                border: "none",
                boxShadow: "none",
              },
              "&:-webkit-autofill": {
                boxShadow: "0 0 0 1000px #F5F6FA inset !important",
                backgroundColor: "transparent !important",
                WebkitTextFillColor: "#090705B2 !important",
                transition: "background-color 5000s ease-in-out 0s",
              },
            }}
          />
          {icon && (
            <Box
              component="img"
              src={icon}
              alt="field icon"
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "20px",
                pointerEvents: "none",
              }}
            />
          )}

          {isPassword && (
            <Box
              onClick={() => setShowPassword(!showPassword)}
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "#090705B2",
              }}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </Box>
          )}
        </Box>
      </Box>
      {error && <Box sx={{ color: "red", fontSize: "0.75rem" }}>{error}</Box>}
    </Box>
  );
};

export const CheckBoxField = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <Checkbox
          checked={checked}
          onChange={onChange}
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
        {label}
      </Typography>
    </Box>
  );
};
