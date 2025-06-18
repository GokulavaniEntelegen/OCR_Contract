import Box from "@mui/material/Box";
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import NewChatIcon from "../../assets/NewChat.svg"
import SearchCustomIcon from "../../assets/SearchCustomIcon.svg"
import DownArrowIcon from "../../assets/DownArrow.svg"
import "./AIChat.scss"

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

                    </div>
                </div>
            </Box>                        
        </div>
    );
}

export default AIChat;