import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "./OtpLogin.scss"
import OtpInput from "react-otp-input";

function OtpLogin() {

  const [otp, setOtp] = useState<string>("");

  return (
    <Box
      sx={{
        // width: { xs: "100%", sm: "80%", md: "50%" }, // Responsive widths
        flex : 1,
        p: { xs: 3, sm: 4, md: 8 }, // Responsive padding
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: 'Poppins,sans-serif',
        mb: 1,
        alignItems: "flex-start",
      }}
    >
      <p className="emailotp">Enter Email OTP</p>
      <p className="simple2step">Its a simple 2 step verification. Enter your 6 digit code sent to tyour registered email.</p>
      <div style={{ marginTop: "7px" }}>
        <p className="enterotp">Enter OTP</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            width: "2.8rem",
            height: "2.8rem",
            margin: "0 0.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
            fontFamily: "Poppins"
          }}
        //   isInputNum
          shouldAutoFocus
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "10px" }}>
        <p className="oopsmsg" style={{ color: "#8D8D8D" }}>Hoops! you didn't recieve OTP yet ?</p>
        <p className="oopsmsg" style={{ color: "#0000FF" }}>Resend OTP</p>
      </div>

      <Button variant="contained" sx={{
        width: "100%",
        bgcolor: "#1093FF",
        borderRadius: "4px",
        fontFamily: "Poppins",
        textTransform: "none",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        boxShadow: 'none',
        marginTop: "18px"
      }}>
        Login
      </Button>

    </Box>
  );
}

export default OtpLogin;