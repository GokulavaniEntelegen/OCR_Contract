import React from "react";
import { Box, TextField, Button } from "@mui/material";

const SetAccPassword = () => {
  return (
    <Box
      sx={{
        // width: "50%",
        flex: 1,
        p: 11,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "37px",
            fontWeight: 600,
            marginBottom: "1px",
            fontFamily: "Poppins, sans-serif",
            letterSpacing:'0%'
            
          }}
        >
          Set Your Account Password
        </p>

        {/* <p
          style={{
            fontSize: "15px",
            color: "#888",
            marginBottom: "10px",
            marginTop: '0px',
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Set a strong password to secure your account.
        </p> */}

        <p
          style={{
            fontSize: "14px",
            color: "#606060",
            fontWeight: 500,
            alignSelf: "flex-start",
            marginBottom: "2px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          New Password
        </p>

        <TextField
          type="password"
          variant="outlined"
          placeholder="********************"
          fullWidth
          size="small"
          sx={{
            mb: 0,
            backgroundColor: "#fafafa",
            fontFamily: "Poppins, sans-serif",
            '& .MuiInputBase-input::placeholder': {
             color: '#42474E',
             opacity: 1, // important to make sure the color is not faded
             },
          }}
        />

        <p
          style={{
            fontSize: "14px",
            color: "#606060",
            fontWeight: 500,
            alignSelf: "flex-start",
            marginBottom: "1px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Confirm New Password
        </p>

        <TextField
          type="password"
          variant="outlined"
          placeholder="********************"
          fullWidth
          size="small"
          sx={{
            mb: 4,
            backgroundColor: "#fafafa",
            fontFamily: "Poppins, sans-serif",
            '& .MuiInputBase-input::placeholder': {
             color: '#42474E',
             opacity: 1, // important to make sure the color is not faded
             },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#007bff",
            textTransform: "none",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            "&:hover": {
              backgroundColor: "#006ae6",
            },
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default SetAccPassword;
