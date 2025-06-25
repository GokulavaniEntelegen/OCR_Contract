import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
// import GoogleIcon from "../../assets/Google.svg"; // Optional: Or use image if needed
import GoogleIcon from "../../../assets/Google.svg"
const LoginLeft = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flex : 1,
        p: 8,
        backgroundColor: "#fff",    
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: 'Poppins,sans-serif',
        mb: 1,
      }}
    >
      <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: "28px",
      }}
>
  <Box>
  <Typography
    variant="h6"
    fontWeight={500}
    sx={{ fontFamily: "Poppins, sans-serif" }}
  >
    Welcome to Lorem
    
  </Typography>
  <Typography variant="h4" fontWeight="500" sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Sign in
    </Typography>
  </Box>

  <Link to ="/create-account" style={{textDecoration: "none", color: "inherit"}}>
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", mt:"4px"}}>
    <Typography sx={{fontFamily: "Poppins", fontWeight: 400,color :"#8D8D8D"}}>No Account?</Typography>
    <Typography
      sx={{ fontFamily:"Poppins" ,color: "#2B80EC", fontWeight: 500, cursor: "pointer" }}
    >
      Sign up
    </Typography>
  </Box>
  </Link>
</Box>


      {/* <Typography variant="h4" fontWeight="500" mb={1} sx={{ fontFamily: 'Poppins, sans-serif' }}>
        Sign in
      </Typography> */}

      <Box component="form" noValidate sx={{ fontFamily: 'Poppins, sans-serif', display: "flex", flexDirection: "column" }}>
        <p className="labelNames" style={{ fontFamily: 'Poppins, sans-serif',}}>
          Enter your username or email address
        </p>
        <TextField
          variant="outlined"
          placeholder="Gracia.m@safenet.com"
          type="email"
          fullWidth
          size="small"
          sx={{ mb: 2,'& .MuiInputBase-input::placeholder': {
             color: '#42474E',
             fontFamily:"Poppins,sans-serif",
             opacity: 1, 
             }, }}
        />

        <p className="labelNames" style={{ fontFamily: 'Poppins, sans-serif',}}>
          Password
        </p>
        <TextField
          variant="outlined"
          placeholder="********************"
          type="password"
          fullWidth
          size="small"
          sx={{mb: 1,'& .MuiInputBase-input::placeholder': {
             color: '#42474E',
             opacity: 1, // important to make sure the color is not faded
             },
          }}
          
        />
        <Link to = "/reset-password" style={{textDecoration: "none", color: "inherit", marginBottom: 3, display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
        <Typography
          variant="caption"
          color="error"
          align="right"
          sx={{ mb: 2, cursor: "pointer" , fontFamily: 'Poppins, sans-serif',fontWeight: 400 ,color:" #FF0000"}}
        >
          Forgot Password
        </Typography>
        </Link>

        <Button
        onClick={() => {navigate("/dashboard")}} 
        variant="contained" fullWidth sx={{ backgroundColor: "#1093FF",   textTransform: "none" ,fontFamily: 'Poppins,sans-serif', boxShadow: "none"}}>
          Sign in
        </Button>

        <Typography
          sx={{
            my: 0.5,
            color: "#000000",
            fontFamily: 'Poppins, sans-serif',
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold"
          }}
        >
           or
        </Typography>


        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <img
              src={GoogleIcon}
              alt="Google"
              width={20}
              height={20}
            />
          }
          sx={{
            backgroundColor: "#eaf2fe",
            color: "#1093FF",
            fontWeight: 500,
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            fontFamily: 'Poppins, sans-serif',
            border :"none",
          }}
        >
          Sign in with google
        </Button>
      </Box>
    </Box>
  );
};

export default LoginLeft;