import React from "react";
import { Button, Popover, FormControlLabel, Checkbox, IconButton, TextField, Box } from "@mui/material";
import { useState } from "react";
import ChatBotBlueIcon from "../assets/ChatBotBlue.svg";
import ChatBack from "../assets/ChatBack.png";
import "./ChatBotPop.scss";
import CancelWhiteIcon from "../assets/CancelWhite.svg";
import SmileyCustomIcon from "../assets/SmileyCustom.svg";
import GalleryCustomIcon from "../assets/GalleryCustom.svg";
import ArrowBlueRightIcon from "../assets/ArrowBlueRight.svg";
import AiAvatar from "../assets/AiAvatar.svg";
import { BorderBottom, BorderTop } from "@mui/icons-material";


const ChatBotPop: React.FC = () => {
    

    const messages = [
        {"text": "How Can I help you today", "typing": false, "time": "08:16 AM"},
        {"text": "I have a question about the return policy for a product I purchased.", "typing": false, "time": "Just Now"},
        {"text": "I have a question about the return policy for a product I purchased.", "typing": true, "time": "now"}
    ]
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
        <IconButton onClick={handleOpen}>
            <img src = {ChatBotBlueIcon} style={{width: "60px", height: "60px"}}/>
        </IconButton>

        <Popover open = {popopen} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{vertical: "center", horizontal:"left"}} sx={{boxShadow: "none", marginLeft: "100px", marginTop: "20px"}}slotProps={{
            paper: {
            elevation: 0,
            sx: {
                boxShadow: "none"
            },
            },
            }}>
                <Box className = "chatbox">
                    <div className="chattop"
                        style={{
                            background: `conic-gradient(
                            from 180deg, #2B80EC,#13C6FF,#16DBCC,#F3B960,#2B80EC
                            )`,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "-300px -150px"
                        }}>
                        <div style={{display: "flex", gap: "30px"}}>
                        <div style={{flex: 3}}>
                        <p className="chattext">ChatFlow</p>
                        <p className="livetext">A live chat interface that allows for seamless connection.</p>
                        </div>
                        <div style={{display: "flex",alignItems: "flex-start",justifyContent: "flex-end", flex: 1}}>
                            <IconButton  onClick = {handleClose} style={{justifyContent: "flex-end"}}><img src ={CancelWhiteIcon} style={{width: "40px", height: "40px"}}/></IconButton>
                        </div>
                        </div>
                    </div>
 
                    <div className = "chatmain" style={{padding: "20px"}}>
                        {messages.map((message,index) => {
                            const sent = index % 2 === 0;
                            return (
                                (sent) ? 
                                (<Box className = "sentbox">
                                    <div className="avatarandtext">
                                    <IconButton><img src = {AiAvatar} style={{width: "40px", height: "40px"}}/></IconButton>
                                    <div>
                                        <p className="assttext">Assistant</p>
                                        {!message.typing ?
                                        (
                                            <Box style={{backgroundColor: "#F1F7FF",borderRadius: "10px", borderTopLeftRadius: "0px"}}>
                                                <p className="msg">How can I help you today?</p>
                                            </Box>
                                        ) :
                                        (<Box style = {{display: "flex", gap: "10px",backgroundColor: "#F1F7FF",borderRadius: "10px", borderTopLeftRadius: "0px", padding: "5px 15px"  }}>
                                            <Box style = {{height: "15px", width: "15px", backgroundColor: "#C7DFFF", borderRadius: "20px"}}></Box>
                                            <Box style = {{height: "15px", width: "15px", backgroundColor: "#C7DFFF", borderRadius: "20px"}}></Box>
                                            <Box style = {{height: "15px", width: "15px", backgroundColor: "#C7DFFF", borderRadius: "20px"}}></Box>
                                        </Box>)}
                                    </div>
                                    </div>
                                </Box>) : 
                                (<div className="ourmsgbox" style={{marginLeft: "30px", display:"flex" ,justifyContent: "flex-end",backgroundColor: "#1093FF",borderRadius: "10px", borderTopRightRadius: "0px", color: "white"}}>
                                    <p className="ourmsg">{message.text}</p>
                                </div>)
                            )
                        })}
                        
                    </div>

                    <div className="chatbottom">
                        <div className="smilereply">
                            <IconButton><img src = {SmileyCustomIcon} style={{width: "24px", height: "24px"}}/></IconButton>
                            <p className="reply">Reply...</p>
                        </div>
                        <div className="galleryleft">
                            <IconButton><img src = {GalleryCustomIcon} style={{width: "24px", height: "24px"}}/></IconButton>
                            <IconButton><img src = {ArrowBlueRightIcon} style={{width: "40px", height: "40px"}}/></IconButton>
                        </div>
                    </div>
                </Box>
        </Popover>
        </>
    );
}

export default ChatBotPop