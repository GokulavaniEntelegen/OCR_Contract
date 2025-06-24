import React from 'react';
import { Popover, Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // optional
import cancelIcon from '../assets/your-image.svg'; // Replace with your actual image path

interface DeleteConfirmationPopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationPopover: React.FC<DeleteConfirmationPopoverProps> = ({
  anchorEl,
  open,
  onClose,
  onDelete,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      disableScrollLock
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
          p: 3,
          borderRadius: '12px',
          width: 320,
          boxShadow: 6,
          backgroundColor: '#fff',
          textAlign: 'center',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>
        {/* <img src={cancelIcon} alt="Delete Icon" style={{ height: 60 }} /> */}
        <IconButton><DeleteIcon/></IconButton>
      </Box>
      <Typography sx={{ mb: 3, fontSize: 16, fontWeight: 500 }}>
        Are you sure you want to delete?
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            minWidth: 100,
            borderRadius: '8px',
            fontWeight: 500,
            color: '#007BFF',
            borderColor: '#007BFF',
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onDelete}
          sx={{
            minWidth: 100,
            borderRadius: '8px',
            backgroundColor: '#007BFF',
            fontWeight: 500,
            ':hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Popover>
  );
};

export default DeleteConfirmationPopover;