import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import RenameIcon from "../../assets/Rename.svg";
import DuplicateIcon from "../../assets/Duplicate.svg";
import DeleteCustomIcon from "../../assets/DeleteBlack.svg";  


const ChartsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { label: "Rename", icon: RenameIcon },
    { label: "Duplicate", icon: DuplicateIcon },
    { label: "Delete", icon: DeleteCustomIcon },
  ];

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <div style={{backgroundColor: "#EAF9FF"}}>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}  PaperProps={{
        sx: {
          backgroundColor: "#EAF9FF",
        },
      }}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <ListItemIcon style={{width: "16px", height: "16px"}}><img src = {option.icon} style={{height: "16px", width: "16px"}}></img></ListItemIcon>
            <ListItemText primary={<p style={{fontFamily: "Poppins", fontSize: "16px"}}>{option.label}</p>} />
          </MenuItem>
        ))}
      </Menu>
      </div>
    </>
  );
};

export default ChartsMenu;
