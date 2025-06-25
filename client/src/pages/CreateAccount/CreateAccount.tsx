import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import "./CreateAccount.scss"
import { Checkbox, FormControlLabel } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckIcon from '@mui/icons-material/Check';


function CreateAccount() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(true);

    return (
        <Box
            sx={{
                // width: "50%",
                flex: 1,
                p: {md: 8, sm: 4},
                width: "100%",  
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: 'Poppins,sans-serif',
                mb: 2,
                overflowY: "auto",
                scrollbarWidth: "none"
            }}
        >
            <p className="welcome" style={{ marginBottom: "7px" }}>Welcome to Contract Books</p>
            <p className="create" style={{ marginTop: "0px", }}>Create your account</p>

            <div style={{ width: "100%", paddingBottom: "14px" }}>
                <p style={{ margin: 0, fontSize: "12px", color: "#606060" }}>Full Name</p>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Maria Gracia"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontFamily: 'Poppins, sans-serif',
                            color: '#42474E',
                            '& fieldset': {
                                borderWidth: '0.5px',
                                borderColor: '#C4C4C4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#999',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000',
                            },

                            // ✅ This is the key: target the input inside the root
                            '& input::placeholder': {
                                color: '#42474E',
                                fontSize: '14px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 400,
                                opacity: 1, // ✅ REQUIRED for color to apply in some browsers
                            },

                            // Optional: input styling
                            '& input': {
                                padding: '10px 12px',
                                fontSize: '14px',
                                color: '#42474E',
                            },
                        },
                    }}

                />

                <p style={{ margin: 0, fontSize: "12px", color: "#606060", marginTop: "8px" }}>Company Name</p>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Safe Net"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontFamily: 'Poppins, sans-serif',
                            color: "#42474E",
                            '& fieldset': {
                                borderWidth: '0.5px',
                                borderColor: '#C4C4C4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#999',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000',
                            },
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#42474E',
                            fontSize: '14px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            opacity: 1, // optional but ensures placeholder visibility
                        },
                        '& input': {
                            padding: '10px 12px',
                            fontSize: '14px',
                            color: '#42474E',
                        },
                    }}
                />


                <p style={{ margin: 0, fontSize: "12px", color: "#606060", marginTop: "8px" }}>Phone Number</p>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="+1 678 8956 678"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontFamily: 'Poppins, sans-serif',
                            color: "#42474E",
                            '& fieldset': {
                                borderWidth: '0.5px',
                                borderColor: '#C4C4C4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#999',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000',
                            },
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#42474E',
                            fontSize: '14px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            opacity: 1,
                        },
                        '& input': {
                            padding: '10px 12px',
                            fontSize: '14px',
                            color: '#42474E',
                        },
                    }}
                />


                <p style={{ margin: 0, fontSize: "12px", color: "#606060", marginTop: "8px" }}>Email ID</p>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Gracia.m@safenet.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontFamily: 'Poppins, sans-serif',
                            color: "#42474E",
                            '& fieldset': {
                                borderWidth: '0.5px',
                                borderColor: '#C4C4C4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#999',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#000',
                            },
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#42474E',
                            fontSize: '14px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            opacity: 1,
                        },
                        '& input': {
                            padding: '10px 12px',
                            fontSize: '14px',
                            color: '#42474E',
                        },
                    }}
                />

            </div>


            <Button variant="contained"
            disabled = {!checked}
            onClick={() => {navigate("/createnewpassword")}}
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
                marginTop: "14px",
                marginBottom: "25px",
                py: "10px"
            }}>
                Sign In
            </Button>

            <FormControlLabel
                sx={{
                    alignItems: 'flex-start', // ✅ Aligns checkbox to top of label
                    marginTop: '0px',
                }}
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="terms"
                        icon={
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    border: '2px solid #000',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {/* Empty box (unchecked) */}
                            </Box>
                        }
                        checkedIcon={
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    border: '2px solid #000',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <CheckIcon sx={{ fontSize: 18, color: '#008853' }} />
                            </Box>
                        }
                        sx={{
                            padding: 0.8,
                            marginRight: 0,
                        }}
                    />
                }
                label={
                    <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        color: '#808080',
                        fontWeight: 400,
                        lineHeight: 1.2,
                    }}>
                        Get the business security newsletter and emails from us with our latest announcements, product updates, events, and research opportunities. <a style={{ color: "#1093FF" }}>Unsubscribe</a> any time.
                    </span>
                }
            />

        </Box>
    );
}

export default CreateAccount;