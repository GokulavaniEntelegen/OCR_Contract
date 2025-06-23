import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ResetPassword = () => {
  return (
    <Box
      sx={{
        // width: "50%",
        flex: 1,
        p: 8,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // centers the box inside horizontally
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#fff",
          padding: 2,
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centers content inside
        }}
      >
        <Typography
          variant="h5"
          fontWeight={500}
          mb={3}
          sx={{
            fontFamily: "Poppins, sans-serif",
            width: "100%",          // ensures same width as inputs
            maxWidth: "100%",       // makes sure it doesn't overflow
            textAlign: "center",     // keep heading centered
            fontSize: '35px'
          }}
        >
          Reset Your Password
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            mb: 1,
            // color: "#888",
            fontFamily: "Poppins, sans-serif",
            alignSelf: "flex-start", // aligns label to the left of form
            color: "#606060"
          }}
        >
          Enter your Email ID or mobile number
        </Typography>

        <TextField
          placeholder="Gracia.m@safenet.com"
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            mb: 3,
            backgroundColor: "#fafafa",
            fontFamily: "Poppins, sans-serif",
            '& .MuiInputBase-input::placeholder': {
             color: '#42474E',
             fontFamily:"Poppins,sans-serif",
             opacity: 1, // important to make sure the color is not faded
             },
            
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#1093FF",
            textTransform: "none",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            "&:hover": {
              backgroundColor: "#006ae6",
            },
          }}
        >
          Confirm Password
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPassword;
