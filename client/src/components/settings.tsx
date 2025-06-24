import React from 'react';
import { Box, Typography, TextField, Button, IconButton, MenuItem } from '@mui/material';
import Hamburger from '../assets/Frame.svg';
import Vector from '../assets/Vector.svg';
import { Margin } from '@mui/icons-material';
import dropdown from '../assets/Dropdown.svg';

const SettingsContent: React.FC = () => {
    return (
        <Box sx={{ padding: '2rem' }}>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '1.5rem',
                }}
            >
                Settings
            </Typography>


            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                    marginBottom: '2rem',


                }}
            >
                <p style={{ marginBottom: '1rem', fontWeight: 500, fontSize: '1rem', fontFamily: 'Poppins, sans-serif', }}>
                    <strong>Key:</strong> The name of the key that you want to extract.
                </p>

                <p style={{ marginBottom: '1rem', fontWeight: 500, fontSize: '1rem', fontFamily: 'Poppins, sans-serif', lineHeight: '28px', width: '80%' }}>
                    <strong>Description:</strong> Give details about what you want to extract. Explain as you are talking to a real person. This will help the AI understand your requirement. You can also specify the format or give synonyms for the key.
                </p>

                <p style={{ marginBottom: '2rem', fontWeight: 500, fontSize: '1rem', fontFamily: 'Poppins, sans-serif', lineHeight: '28px' }}>
                    <strong>Example:</strong> Provide an example for the key. Respect the format that you want to receive the data in.
                </p>
                {/* Input Row */}
                <Box
                    sx={{
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginBottom: '1.5rem',
                        fontFamily: 'poppins,sans-serif',
                        fontSize: '14px',
                        // fontWeight:'400',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Box >
                        <img src={Hamburger} alt="image" style={{ height: '2rem', width: 18, }} />
                    </Box>

                    {/* <Box 
                    sx={{ 
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        gap:'2rem',
                        width:'100%',
                       
                        
                        
                    }}> */}


                    <Box sx={{ width: '30%', }}>
                        <p style={{ margin: 1, color: '#606060', }}> Key 1</p>
                        <TextField

                            placeholder="Invoice_ID"
                            variant="outlined"
                            size="small"

                            sx={{
                                '& input::placeholder': {
                                    color: '#42474E', // 👈 your desired placeholder color
                                    opacity: 1,
                                }
                            }}
                            fullWidth
                        />
                    </Box>

                    <Box sx={{ width: '30%', }}>
                        <p style={{ margin: 1, color: '#606060', }}>Description</p>
                        {/* Description Field */}
                        <TextField
                            placeholder="Invoice id/Invoice number/rec"
                            variant="outlined"
                            size="small"
                            sx={{
                                '& input::placeholder': {
                                    color: '#42474E', // 👈 your desired placeholder color
                                    opacity: 1,
                                }
                            }}
                            fullWidth
                        // defaultValue="Invoice id/Invoice number/rec"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
                        <p style={{ margin: 1, color: '#606060', fontFamily: 'poppins,sans-serif' }}>Data Type</p>

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


                    {/* </Box> */}

                    <Box sx={{ marginLeft: 'auto' }}>
                        <img src={Vector} alt="image" style={{ height: '2rem', width: 18, paddingLeft: '24', }} />
                    </Box>




                </Box>

                <Typography
                    sx={{
                        color: '#007BFF',
                        fontWeight: 500,
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                    }}
                >
                    + Add another Meta data
                </Typography>

            </Box>



        </Box>






    );
};

export default SettingsContent;
