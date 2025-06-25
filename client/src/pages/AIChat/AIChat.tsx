import Box from "@mui/material/Box";
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Button, IconButton, TextField, InputAdornment } from "@mui/material";
import NewChatIcon from "../../assets/NewChat.svg"
import SearchCustomIcon from "../../assets/SearchCustomIcon.svg"
import DownArrowIcon from "../../assets/DownArrow.svg"
import "./AIChat.scss"
import ExamplePopIcon from "../../assets/ExamplePop.svg";
import StarIcon from "../../assets/Star.svg";
import WarningIcon from "../../assets/Warning.svg";
import ClipButtonIcon from "../../assets/ClipButton.svg";
import MicCustomIcon from "../../assets/MicCustom.svg";
import SendCustomIcon from "../../assets/SendCustom.svg";

function AIChat() {
    return (
        <div>
            <Box sx={{width: "100%",minHeight: "100vh" }}>
                <div style={{padding: "30px 30px 0px 30px", display:"flex"}}>
                    <div className  ="sidepanel">
                        <List>
                        <ListItem>
                            
                            <ListItemIcon sx = {{minWidth: "35px"}}>
                            <img src = {NewChatIcon} style={{width: "24px", height: "24px"}}/>
                            </ListItemIcon>
                            <ListItemText primary={<p className="listtext">New Chat</p>}/>
                            
                        </ListItem>

                        <ListItem style={{borderBottom: "1px solid #E7E7E7", paddingBottom:"20px"}}>
                            
                            <ListItemIcon sx = {{minWidth: "35px"}}>
                            <img src = {SearchCustomIcon} style={{width: "24px", height: "24px"}}/>
                            </ListItemIcon>
                            <ListItemText primary={<p className="listtext">Search</p>} />
                            
                        </ListItem>
                        </List>

                        <Button
                        endIcon = {<img src= {DownArrowIcon} style={{width:"12px", height: "6px"}}/>}
                        style = {{
                            textTransform: "none",
                            marginLeft: "10px"
                        }}
                        ><p className="today">Today</p></Button>
                    </div>
                    <div className="chatpanel">
                        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
                            
                            <div className="middlecomps">
                                <div className="examplesai">
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px"}}>
                                        <img src = {ExamplePopIcon} style={{width: "48px", height: "48px"}}/>
                                        <p className="exampleaitext">Examples</p>
                                        <p className="exbelowtext" style={{marginTop: "10px"}}><u>Explain quantum computing in simple terms →</u></p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext"><u>Got any creative ideas for a 10 year old's birthday? →</u></p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext"><u>How do I make an HTTP request in Javascript? →</u></p>
                                    </div>
                                </div>
                                <div className="capabilitiesai">
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px"}}>
                                        <img src = {StarIcon} style={{width: "48px", height: "48px"}}/>
                                        <p className="exampleaitext">Capabilities</p>
                                        <p className="exbelowtext" style={{marginTop: "10px"}}>Remembers what user said earlier in the conversation</p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext">Allows user to provide follow-up corrections</p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext">Trained to decline inappropriate requests</p>
                                    </div>
                                </div>
                                <div className="limitationsai">
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px"}}>
                                        <img src = {WarningIcon} style={{width: "48px", height: "48px"}}/>
                                        <p className="exampleaitext">Limitations</p>
                                        <p className="exbelowtext" style={{marginTop: "10px"}}>May occasionally generate incorrect information</p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext">May occasionally produce harmful instructions or biased</p>
                                    </div>
                                    <div style={{border: "2px solid #E7E7E7", borderRadius: "12px", padding: "20px 24px", marginTop: "16px"}}>
                                        <p className="exbelowtext">Limited knowledge of world and events after 2021</p>
                                    </div>
                                </div>

                            </div>

                            <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Ask Chat or @mention"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                    <img
                                        src={ClipButtonIcon}
                                        alt="clip"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    </IconButton>
                                </InputAdornment>
                                ),
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                    <img
                                        src={MicCustomIcon}
                                        alt="mic"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    </IconButton>
                                    <IconButton>
                                    <img
                                        src={SendCustomIcon}
                                        alt="send"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            sx={{
                                borderRadius: "8px",
                                marginTop: "175px",
                                "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                padding: "0 8px",
                                backgroundColor: "#fff",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: 500,
                                height: "48px",
                                color: "#000000",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                border: "1px solid #E7E7E7",
                                },
                                "& .MuiInputBase-input::placeholder": {
                                color: "#000000",
                                opacity: 1,
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                fontWeight: 400,
                                },
                            }}
                            />
                        </div>
                    </div>
                </div>
            </Box>                        
        </div>
    );
}

export default AIChat;