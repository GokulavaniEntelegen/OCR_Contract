import React from "react";
import { Button, Popover, FormControlLabel, Checkbox, IconButton, TextField } from "@mui/material";
import ImportDetailsIcon from "../../assets/ImportDetails.svg"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import"./ImportContractPop.scss";
import ImportFileIcon from "../../assets/ImportFile.svg";
import ImportBlueIcon from "../../assets/ImportBlueCustom.svg";
import ImpFileIc from "../../assets/Uplo.svg";

const ImportContractPop: React.FC<{fromtext: string}> = ({fromtext}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const popopen = Boolean(anchorEl);
    const [newLabel, setNewLabel] = useState("");

    const [anchorElUpl, setAnchorElUpl] = useState<null | HTMLElement>(null);
    const handleOpenUpl = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUpl(event.currentTarget);
    };
    
    const handleCloseUpl = () => {
        setAnchorElUpl(null);
    };
    
    const popopenUpl = Boolean(anchorElUpl);
    
    return (
        <>
            {(fromtext === "allcontracts") ? 
            (<Button
                variant="text"
                onClick={handleOpen}
                startIcon = {<img src = {ImportDetailsIcon} style={{height: "18px", width: "18px"}}/>}
                sx={{textTransform: "none", fontSize: "16px", color: "#1093FF", fontFamily: "Poppins", fontWeight: '500'}}
                >
                    Import Details
            </Button>): 
            (<Button
                variant="outlined" // Outlined button for "Import Contract"
                onClick={handleOpen}
                startIcon={<img src ={ImportBlueIcon} style={{width: "18px", height : "18px"}}/>} // Example icon
                // No 'disabled' or 'loading' state here
                sx={{
                //   color: 'white', // White text color
                fontFamily: "Poppins",
                borderColor: 'white', // White border
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                color: "#1093FF",
                '&:hover': {
                    borderColor: 'none',
                    // color: '#f0f0f0',
                },
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "4px", // Rounded corners for button
                px: 3,
                py: 1.5,
                width: "280px"
                }}
            >
                Import Contract
            </Button>)}

            <Popover open = {popopen} anchorEl={anchorEl} onClose={handleClose} disableScrollLock anchorOrigin={{vertical: "bottom", horizontal:"left"}} sx={{boxShadow: "none", marginLeft: "-250px", marginTop: "20px", borderRadius: "20px"}}slotProps={{
            paper: {
            elevation: 0,
            sx: {
                boxShadow: "none",
                borderRadius: "20px",
            },
            },
            }}>
            <div className="addview-box">
            <div className="addviewtop">
                <p>Import Contract</p>
                <IconButton onClick={handleClose}><CloseIcon sx = {{color: "black"}} /></IconButton>
            </div>
            <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "15px", fontFamily: "Poppins"}}>Enter Label Name</p>
            <TextField
            variant="outlined"
            fullWidth
            // placeholder="AI View"
            value={newLabel}
            onChange={(event) => setNewLabel(event.target.value)}
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

            <FormControlLabel
            control={<Checkbox />}
            label={
                <p
                style={{
                    fontSize: "14px",fontFamily:"Poppins",fontWeight: "500",color:"#1093FF"
                }}
                >
                Apply as default
                </p>
            }
            
            />

            <div className="buttons" style={{padding: "20px 0px 0px 0px"}}>
                <Button
                onClick={handleClose}
                variant="outlined"
                style={{
                    textTransform: "none", 
                    fontSize: "16px", 
                    padding: "10px 20px 10px 20px",
                    border: "1px solid gray",
                    color: "#1093FF"
                    }} 
                className="actions">Cancel</Button>
                <Button
                variant="contained"
                onClick={handleOpenUpl}
                style={{
                    textTransform: "none", 
                    fontSize: "16px", 
                    padding: "10px 25px 10px 25px",
                    backgroundColor: "#1093FF",
                    boxShadow: "none"
                    }} 
                className="actions">Import</Button>
            </div>
            </div>
            </Popover>

            <Popover open = {popopenUpl} anchorEl={anchorElUpl} disableScrollLock onClose={handleCloseUpl} anchorOrigin={{vertical: "bottom", horizontal:"left"}} sx={{boxShadow: "none",  marginLeft: (fromtext === "allcontracts") ? "-670px" : "140px", marginTop: "-100px"}}slotProps={{
            paper: {
            elevation: 0,
            sx: {
                boxShadow: "none",
                borderRadius: "20px",   
            },
            },
            }}>
                <div className="uploadbox">
                    <p className="import-text">Import Contract Details</p>
                    <div className="smallbox">
                        <IconButton><img src = {ImpFileIc} style = {{width: "85", height: "85"}}/></IconButton>
                        <p className="dragtext">Drag and drop your files here or <a style={{color: "#1093FF", cursor: "p"}}>Browse Files</a></p>
                    </div>
                </div>
            </Popover>
        </>
    );
}

export default ImportContractPop