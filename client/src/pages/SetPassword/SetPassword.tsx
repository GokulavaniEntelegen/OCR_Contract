import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SetAccPassword = () => {

  const navigate = useNavigate();

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
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
         mb: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "34px",
            fontWeight: 500,
            marginBottom: "1px",
            fontFamily: "Poppins, sans-serif",
            letterSpacing:'0%',
            paddingBottom: "32px",
            // lineHeight:'52px'
            
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
            paddingBottom: "8px",
            backgroundColor: "#FFFFFF",
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
            backgroundColor: "#FFFFFF",
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
          onClick={()=>{navigate("/invite")}}
          sx={{
            backgroundColor: "#1093FF",
            boxShadow: "none",
            textTransform: "none",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            // "&:hover": {
            //   backgroundColor: "#006ae6",
            // },
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default SetAccPassword;
