// // pages/DeletePopoverExample.tsx

// import React, { useState } from 'react';
// import { IconButton } from '@mui/material';
// import DeleteIcon from '../assets/Delete.svg';
// import DeleteConfirmationPopover from './deletepop';

// const DeletePopoverExample: React.FC = () => {
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => setAnchorEl(null);

//   const handleDelete = () => {
//     console.log("Item deleted");
//     handleClose();
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <IconButton  onClick={handleClick}>
//         <img src={DeleteIcon} alt="icon" />
//       </IconButton>

//       <DeleteConfirmationPopover
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// };

// export default DeletePopoverExample;

// pages/DeletePopoverStandalone.tsx

import React, { useState } from 'react';
import {
  IconButton,
  Popover,
  Box,
  Typography,
  Button,
} from '@mui/material';
// import DeleteIcon from '../assets/Delete.svg';
import DeleteIcon from "../assets/DeleteBlack.svg";
import deleteImage from '../assets/EmptyState.svg';

const DeletePopoverExample: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleDelete = () => {
    console.log("Item deleted");
    handleClose();
  };

  return (
    <div>
      {/* Delete icon button */}
      <div style={{borderLeft: "0.5px solid lightgray", display: "flex", alignItems: "center", paddingLeft: "10px"}}><IconButton sx = {{py: 0}} onClick={handleClick} ><img src={DeleteIcon} style={{width: "24px", height: "24px"}}/></IconButton></div>

      {/* Popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            padding: 3,
            borderRadius: '20px',
            width: 320,
            textAlign: 'center',
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <img src={deleteImage} alt="Delete Illustration" style={{ height: 70 }} />
        </Box>
        <Typography
          sx={{
            mb: 2,
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1.15px',
            color: '#303030',
          }}
        >
          Are you sure you want to delete?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              border: '1px solid #72777F',
              width: 100,
              borderRadius: 1,
              color: "#1093FF",
              fontWeight: 500,
              textTransform: 'none',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              backgroundColor: '#1093FF',
              width: 100,
              borderRadius: 1,
              boxShadow: "none",
              fontWeight: 500,
              textTransform: 'none',
              fontFamily: 'Poppins, sans-serif',
              ':hover': {
                backgroundColor: '#1093FF',
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default DeletePopoverExample;
