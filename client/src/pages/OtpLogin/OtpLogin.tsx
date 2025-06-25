import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import "./OtpLogin.scss"
import OtpInput from "react-otp-input";
import ShowMsgTickIcon from "../../assets/ShowMsgTick.svg";
import CloseGrayIcon from "../../assets/CloseGrey.svg";
import GreenTickOtpIcon from "../../assets/GreenTickOtp.svg";
import { useNavigate } from "react-router-dom";

function OtpLogin() {

  const [otp, setOtp] = useState<string>("");
  const [showSentMsg, setShowSentMsg] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOtpLogin = () => {
    setShowSentMsg(prev => !prev);

    setTimeout(() => {
      console.log("Waited 2 seconds");
      navigate("/createnewpassword")
    }, 2000);
    // navigate("/setaccpassword")
  }

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
      {showSentMsg && (
        <div className="showmsg">
          <img src = {GreenTickOtpIcon} style={{width: "38px", height: "38px"}}/>
          <p style = {{color: "#475467", fontFamily: "Poppins", fontSize: "12px"}}><b>OTP Sent Successfully</b> to your email/mobile</p>
          <IconButton onClick={() => {setShowSentMsg(false)}}><img src = {CloseGrayIcon} style={{width: "24px", height: "24px"}}/></IconButton>
        </div>
      )}

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

      <Button variant="contained"
      onClick={handleOtpLogin}
      sx={{
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