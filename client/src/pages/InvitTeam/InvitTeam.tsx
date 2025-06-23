import React, { use, useState } from "react"
import "./InviteTeam.scss"
import { Box, TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
function Invite() {
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");
    return(
        <Box
        sx={{
            flex: 1,
            p: 8,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: 'Poppins,sans-serif',
            mb: 1,
        }}
        >
            <p className="inviterest">Invite the rest of the team</p>
            <div style={{width: "100%"}}>
                {/* <p style={{margin: 0, fontSize: "12px", color: "#606060"}}>Full Name</p> */}
                <TextField
                variant="outlined"
                fullWidth
                placeholder="Brian.q@safenet.com"
                value={email1}
                onChange={(event) => {setEmail1(event.target.value)}}
                sx={{
                    marginBottom: "10px",
                    '& .MuiInputBase-root': {
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif',
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
                    '& .MuiInputBase-input': {
                    padding: '10px 12px',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#42474E',
                    },
                    '& .MuiInputBase-input::placeholder': {
                    color: '#42474E',
                    fontSize: '14px',
                    fontWeight: 400,
                    opacity: 1,
                    },
                }}
                />

                {/* <p style={{margin: 0, fontSize: "12px", color: "#606060", marginTop: "15px"}}>Company Name</p> */}
                <TextField
                variant="outlined"
                fullWidth
                placeholder="Robert.r@safenet.com"
                value={email2}
                onChange={(event) => {setEmail2(event.target.value)}}
                sx={{
                    marginBottom: "10px",
                    '& .MuiInputBase-root': {
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif',
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
                    '& .MuiInputBase-input': {
                    padding: '10px 12px',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#42474E',
                    },
                    '& .MuiInputBase-input::placeholder': {
                    color: '#42474E',
                    fontSize: '14px',
                    fontWeight: 400,
                    opacity: 1,
                    },
                }}
                />

                {/* <p style={{margin: 0, fontSize: "12px", color: "#606060", marginTop: "15px"}}>Phone Number</p> */}
                <TextField
                variant="outlined"
                fullWidth
                placeholder="Bala.r@safenet.com"
                value={email3}
                onChange={(event) => setEmail3(event.target.value)}
                sx={{
                    marginBottom: "7px",
                    '& .MuiInputBase-root': {
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif',
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
                    '& .MuiInputBase-input': {
                    padding: '10px 12px',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#42474E',
                    },
                    '& .MuiInputBase-input::placeholder': {
                    color: '#42474E',
                    fontSize: '14px',
                    fontWeight: 400,
                    opacity: 1,
                    },
                }}
                />
            </div>
            <div style = {{display: "flex", justifyContent: "space-between"}}>
            <Button
            variant="text"
            startIcon = {<AddIcon/>}
            sx={{textTransform: "none", fontSize: "16px",fontWeight: "500", color: "#1093FF", display: "flex", alignItems: "center", justifyContent: "flex-start", fontFamily: "Poppins"}}
            >
                Add another
            </Button>
            
            <Button
            variant="text"
            sx={{textTransform: "none", fontSize: "16px",fontWeight: "500", color: "#747474", display: "flex", justifyContent: "flex-end"}}>
                Skip
            </Button>
            </div>

            <Button variant="contained" sx = {{width: "100%",
                    bgcolor: "#1093FF", 
                    borderRadius: "4px", 
                    fontFamily:"Poppins", 
                    textTransform: "none",
                    fontSize: "16px",
                    lineHeight:"20px",
                    fontWeight:"500",
                    boxShadow: 'none',
                    marginTop: "30px",
                    marginBottom: "25px",
                    py: "10px"}}>
                        Send Invites
                </Button>

        </Box>
    );
}

export default Invite;