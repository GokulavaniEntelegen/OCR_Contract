import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Popover, Box, TextField, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import RenameIcon from "../../assets/Rename.svg";
import DuplicateIcon from "../../assets/Duplicate.svg";
import DeleteCustomIcon from "../../assets/DeleteBlack.svg";
import CloseIcon from '@mui/icons-material/Close';


type TabsMenuProps = {
  handleNameChange: (name: string) => void; // adjust type as needed
};

const TabsMenu: React.FC <TabsMenuProps>= ({handleNameChange}) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const [anchorElRename, setAnchorElRename] = useState<null | HTMLElement>(null);
  const handleOpenRename = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRename(event.currentTarget);
  };
  
  const handleCloseRename = () => {
    setAnchorElRename(null);
  };
  
  const options = [
    { label: "Rename", icon: RenameIcon, func: handleOpenRename },
    { label: "Duplicate", icon: DuplicateIcon, func: handleClose },
    { label: "Delete", icon: DeleteCustomIcon, func: handleClose},
  ];
  const popopenRename = Boolean(anchorElRename);
  const [newName, setNewName] = useState<string>("");

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <div style={{backgroundColor: "#EAF9FF"}}>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}  PaperProps={{
        sx: {
        //   backgroundColor: "#EAF9FF",
        },
      }}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={option.func}>
            <ListItemIcon style={{width: "16px", height: "16px"}}><img src = {option.icon} style={{height: "16px", width: "16px"}}></img></ListItemIcon>
            <ListItemText primary={<p style={{fontFamily: "Poppins", fontSize: "16px"}}>{option.label}</p>} />
          </MenuItem>
        ))}
      </Menu>
      </div>

      <Popover open = {popopenRename} anchorEl={anchorElRename} onClose={handleCloseRename} disableScrollLock anchorOrigin={{vertical: "top", horizontal:"right"}} sx={{boxShadow: "none", marginLeft: "10px", marginTop: "-20px"}}slotProps={{
        paper: {
        elevation: 0,
        sx: {
            boxShadow: "none"
        },
        },
        }}>
          <div className="addview-box">
              <div className="addviewtop">
                  <p>Rename</p>
                  <IconButton onClick={handleCloseRename}><CloseIcon sx = {{color: "black"}} /></IconButton>
              </div>
              <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "15px", fontFamily:"Poppins"}}>Enter new name for the Widget</p>
              <TextField
              variant="outlined"
              fullWidth
              placeholder="No. of Contracts ..."
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
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
              <div className="buttons" style={{padding: "20px 0px 0px 0px"}}>
                  <Button
                  onClick={() => {setAnchorElRename(null)}}
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
                  // onClick = {handleOpenRename}
                  variant="contained"
                  onClick={() => {handleNameChange(newName)}}
                  style={{
                      textTransform: "none", 
                      fontSize: "16px", 
                      padding: "10px 25px 10px 25px",
                      backgroundColor: "#1093FF",
                      boxShadow: "none"
                      }} 
                  className="actions">Save</Button>
              </div>
          </div>
        </Popover>
    </>
  );
};

export default TabsMenu;
