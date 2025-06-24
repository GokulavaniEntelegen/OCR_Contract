import React, { use, useState } from "react";
import { IconButton, Popover, List, ListItem, ListItemIcon, ListItemText, Checkbox, Button, TextField, FormControlLabel} from "@mui/material";
import LabelIcon from "../../assets/Label.svg";
import "./LabelAsPop.scss";
import SearchCustomIcon from "../../assets/SearchCustomIcon.svg";
import CloseIcon from '@mui/icons-material/Close';

const LabelAs: React.FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElEnter, setAnchorElEnter] = useState<HTMLElement |null>(null);
    const handleEnterClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElEnter(event.currentTarget);
    }
    const handleEnterClose = () => {
        setAnchorElEnter(null);
    }
    const enterOpen = Boolean(anchorElEnter);


  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popopen = Boolean(anchorEl);

  const [subchecked, setSubchecked] = useState<string[]>([]);
  const [subcategories, setSubcategories] = useState(["Renewable", "Design", "SLA"]);

  const handleToggle = (value: string) => () => {
    if (value === 'all') {
      if (subchecked.length === subcategories.length) {
        setSubchecked([]);
      } else {
        setSubchecked([...subcategories]);
      }
    } else {
      const currentIndex = subchecked.indexOf(value);
      const newChecked = [...subchecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setSubchecked(newChecked);
    }
  };

  const [newLabel, setNewLabel] = useState("");
  const handleAdd = () => {
    if(newLabel.trim() !== "") {
        setSubcategories([...subcategories, newLabel])
        setNewLabel("");
    }
  }

  return (
    <>
      <IconButton sx = {{py: 0}}><img src={LabelIcon} style={{width: "24px", height: "24px"}} onClick = {handleOpen}/></IconButton>
      <Popover open = {popopen} anchorEl={anchorEl} onClose={handleClose} disableScrollLock anchorOrigin={{vertical: "center", horizontal:"right"}} sx={{boxShadow: "none", marginLeft: "30px", marginTop: "-50px"}}slotProps={{
                paper: {
                elevation: 0,
                sx: {
                boxShadow: "none",
                },
            },
        }}>
            <div className="labelasbox">
                <div className="labelasboxtop">
                <p style={{fontFamily: "Poppins", fontSize: "16px", color: "#000000"}}>Label As</p>
                <div style={{ display: "flex", justifyContent:"flex-end", marginBottom: "5px"}}><IconButton><img src = {SearchCustomIcon} style={{width: "13.54px", height:"13.54px",}}/></IconButton></div>
                </div>
                <div className = "subcatlist" style={{marginTop: "8px", paddingBottom: "50px", borderBottom: "1px solid #E0E0E0"}}>
                <List>
                    {subcategories.map((subcategory) => (
                        <ListItem
                        key={subcategory}
                        dense
                        disablePadding
                        onClick={handleToggle(subcategory)}
                        sx={{ cursor: 'pointer'}}
                        >
                        <div style={{display:"flex", alignItems: "center"}}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            <Checkbox
                            edge="start"
                            checked={subchecked.includes(subcategory)}
                            tabIndex={-1}
                            disableRipple
                            sx={{'& .MuiSvgIcon-root': {
                                borderRadius: '50px', // or '8px' for more rounding
                            },  
                            '&.Mui-checked': {
                            color: '#606060', // Checked color
                            },
                            }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={<p style={{fontFamily: "Poppins", fontSize: "16px", color: "#000000", fontWeight: "400"}}>{subcategory}</p>} />
                        </div>
                        </ListItem>
                    ))}
                </List>
                </div>
                <div style={{display:"flex", alignItems: "center", justifyContent: "center", paddingTop:"24px"}}>
                <Button onClick={(event) => { subchecked.length < 1 &&  handleEnterClick(event); }} style={{textTransform: "none", fontSize: "14px", fontFamily: "Poppins", fontWeight: "500", color :"#1093FF"}}>{subchecked.length > 0 ? ("Apply"):("Create New")}</Button>
                </div>
            </div>
      </Popover>

      <Popover open = {enterOpen} anchorEl={anchorElEnter} onClose={handleEnterClose} disableScrollLock anchorOrigin={{vertical: "center", horizontal:"right"}} sx={{boxShadow: "none", marginLeft: "100px", marginTop: "-100px"}}slotProps={{
            paper: {
            elevation: 0,
            sx: {
                boxShadow: "none",
            },
            },
        }}>
            <div className="addview-box">
            <div className="addviewtop">
                <p>Enter Label Name</p>
                <IconButton onClick={handleEnterClose}><CloseIcon sx = {{color: "black"}} /></IconButton>
            </div>
            <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "15px", fontFamily: "Poppins"}}>Label Name</p>
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
                onClick={handleEnterClose}
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
                onClick = {handleAdd}
                variant="contained"
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

export default LabelAs;
