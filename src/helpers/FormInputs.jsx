import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const NormalTextField = ({
  name,
  value,
  handleChange,
  placeholder,
  minLength,
  isNumber = false,
  isPassword = false,
  error,
  icon,
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
        <Box sx={{ position: "relative", width: "100%" }}>
          <input
            type={getInputType()}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            minLength={minLength}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              fontSize: "0.875rem",
              color: "#090705B2",
              marginLeft: '2rem',
              paddingRight: isPassword ? '2.5rem' : '0',
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
             {showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </Box>
          )}
        </Box>
      </Box>
      {error && (
        <Box sx={{ color: "red", fontSize: "0.75rem" }}>
          {error}
        </Box>
      )}
    </Box>
  );
};