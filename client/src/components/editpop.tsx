
import React, { useState } from 'react';
import {
  IconButton,
  Popover,
  Box,
  Typography,
  Button,
} from '@mui/material';
import editImage from '../assets/edit i.svg';

const EditPop: React.FC = () => {
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
    <div style={{ padding: '2rem' }}>
      <Button
        variant="text"
        onClick={handleClick}
        sx={{
          fontFamily: 'Poppins,sans-serif',
          fontSize: '14 px',
          
          textTransform: 'none',
          color: '#007BFF',
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        }}
      >
        View edits
      </Button>


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
          <img src={editImage} alt="Delete Illustration" style={{ height: 70 }} />
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
          15 fields have been edited,click to apply changes.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              border: '2px solid #72777F',
              width: 100,
              borderRadius: 1,
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
              backgroundColor: '#007BFF',
              width: 100,
              borderRadius: 1,
              fontWeight: 500,
              textTransform: 'none',
              fontFamily: 'Poppins, sans-serif',
              ':hover': {
                backgroundColor: '#1093FF',
              },
            }}
          >
            Apply
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default EditPop;
