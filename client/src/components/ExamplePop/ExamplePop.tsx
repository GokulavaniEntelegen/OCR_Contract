import React from "react";
import { Button, Popover, FormControlLabel, Checkbox, IconButton, TextField } from "@mui/material";
import ImportDetailsIcon from "../assets/ImportDetails.svg";
import { useState } from "react";
import ExamplePopIcon from "../../assets/ExamplePop.svg";
import "./ExamplePop.scss";
import UploadCustomIcon from "../assets/UploadCustom.svg";
import UploadBlueIcon from "../../assets/UploadBlue.svg";

const ExamplePop: React.FC = () => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const popopen = Boolean(anchorEl);

    return (
        <>
            <Button
                variant="text"
                onClick={handleOpen}
                // startIcon = {<img src = {ImportDetailsIcon} style={{height: "18px", width: "18px"}}/>}
                sx={{textTransform: "none", fontSize: "16px", color: "#1093FF", fontFamily: "Poppins", fontWeight: '500'}}
                >
                    Example
            </Button>

            <Popover open = {popopen} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{vertical: "center", horizontal:"left"}} sx={{boxShadow: "none", marginLeft: "100px", marginTop: "20px"}}slotProps={{
                paper: {
                elevation: 0,
                sx: {
                    boxShadow: "none"
                },
                },
                }}>
                    <div className="examplebox">
                        <img src = {ExamplePopIcon} style={{width: "48px", height: "48px"}}/>
                        <p className="exampletext">Examples</p>
                        <p className="explaintext"><u>Explain total Invoice in simple terms →</u></p>
                        <TextField
                            variant="outlined"
                            
                            multiline
                            minRows={4}
                            maxRows={8}
                            // placeholder="Enter your description here..."
                            sx={{
                                width: "34.375rem",
                                marginTop: "16px",
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                backgroundColor: '#D9D9D933', // light blue background
                                '& fieldset': {
                                    borderColor: '#ffffff', // blue border
                                },
                                '&:hover fieldset': {
                                    borderColor: 'lightgray', // darker blue on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'lightgray', // even darker blue when focused
                                },
                                },
                                '& .MuiInputBase-input::placeholder': {
                                fontSize: '16px', // increase placeholder size
                                fontFamily: "Poppins",
                                color: '#555',
                                },
                                '& .MuiInputBase-input' : {
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                },
                            }}
                        />
                        <div className="examplebuttons">
                            <Button
                            variant="text"
                            startIcon = {<img src = {UploadBlueIcon} style={{width: "18px", height: "18px"}}/>}
                            style={{textTransform: "none", fontFamily: "Poppins", fontSize: "14px",fontWeight: "500", color:"#1093FF", letterSpacing: "0.3px"}}>
                                Upload Picture
                            </Button>

                            <Button
                            variant="contained"
                            // startIcon = {<img src = {UploadBlueIcon} style={{width: "18px", height: "18px"}}/>}
                            style={{textTransform: "none", fontFamily: "Poppins", fontSize: "14px",fontWeight: "500", backgroundColor:"#1093FF", boxShadow: "none"}}>
                                <p style={{padding: "5px 10px"}}>Submit</p>
                            </Button>
                        </div>

                    </div>
                    
            </Popover>
        </>
    );
}

export default ExamplePop