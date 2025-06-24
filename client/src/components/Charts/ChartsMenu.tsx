import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import RenameIcon from "../../assets/Rename.svg";
import DuplicateIcon from "../../assets/Duplicate.svg";
import DeleteCustomIcon from "../../assets/Delete.svg";  


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
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose} >
            <ListItemIcon><img src = {option.icon} style={{height: "20", width: "20"}}></img></ListItemIcon>
            <ListItemText primary={<p style={{fontFamily: "Poppins", fontSize: "16px"}}>{option.label}</p>} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ChartsMenu;
