// src/components/MetaRow.tsx

import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import Hamburger from '../assets/Frame.svg';
import Vector from '../assets/Vector.svg';
import { IconButton } from '@mui/material';
import dropdown from '../assets/dropdown.svg';



interface MetaRowProps {
  keyLabel: string;
  keyPlaceholder: string;
  descriptionPlaceholder: string;
  dataTypePlaceholder: string;
}

const CustomRow: React.FC<MetaRowProps> = ({
  keyLabel,
  keyPlaceholder,
  descriptionPlaceholder,
  dataTypePlaceholder,
}) => {
  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        marginBottom: '1.5rem',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        backgroundColor: '#ffffff',
         width:'95%'
      }}
    >
      <Box>
        <img src={Hamburger} alt="hamburger" style={{ height: '2rem', width: 18 }} />
      </Box>

      <Box sx={{ width: '30%' }}>
        <p style={{ margin: 1, color: '#606060' }}>{keyLabel}</p>
        <TextField
          placeholder={keyPlaceholder}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            '& input::placeholder': {
              color: '#42474E',
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box sx={{ width: '30%' }}>
        <p style={{ margin: 1, color: '#606060' }}>Description</p>
        <TextField
          placeholder={descriptionPlaceholder}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            '& input::placeholder': {
              color: '#42474E',
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box sx={{ width: '20%' }}>
        <p style={{ margin: 1, color: '#606060' }}>Data Type</p>
         <Box sx={{ position: 'relative' }}>
                        <TextField
                            select
                            placeholder="Example:Invoice"
                            variant="outlined"
                            size="small"
                            defaultValue=""
                            fullWidth
                            SelectProps={{
                                IconComponent: () => null  // Remove default icon
                            }}
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                '& .MuiSelect-select': {
                                    fontFamily: 'Poppins, sans-serif',
                                    color: '#45464B',
                                    padding: '8px 0',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                    borderBottom: '1px solid #D1D5DB',
                                    borderRadius: '4px',
                                },
                            }}
                        >
                            <MenuItem value="Invoice" sx={{ fontFamily: 'poppins,sans-serif' }}>
                                Example: Invoice
                            </MenuItem>
                        </TextField>

                        {/* ✅ Custom dropdown icon */}
                        <IconButton
                            size="small"
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none'
                            }}
                        >
                            {/* Replace with your own icon or image if needed */}
                            <img src={dropdown} alt="dropdown" style={{ width: 8, height: 8 }} />

                        </IconButton>
                    </Box>
      </Box>

      <Box sx={{ marginLeft: 'auto' }}>
        <img src={Vector} alt="vector" style={{ height: '2rem', width: 18 }} />
      </Box>
    </Box>
  );
};

export default CustomRow;
