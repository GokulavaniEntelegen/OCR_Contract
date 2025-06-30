import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CreateNewPassword = () => {
  const navigate=useNavigate()
  return (
    <Box
      sx={{
        flex:1,
        p: 8,
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
          alignItems: "flex-start",
        }}
      >
        <p
          style={{
            fontSize: "33px",
            fontWeight: 500,
            marginBottom: "1px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Create New Password
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#888",
            marginBottom: "10px",
            marginTop: '0px',
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            paddingBottom: "32px",
          }}
        >
          Set a strong password to secure your account.
        </p>

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
            mb: 1,
            backgroundColor: "#FFFFFF",
            fontFamily: "Poppins, sans-serif",
            // paddingBottom: "8px",
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
        onClick={()=>navigate('/')}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#1093FF",
            textTransform: "none",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            boxShadow: "none"
          }}
        >
          Confirm Password
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewPassword;
