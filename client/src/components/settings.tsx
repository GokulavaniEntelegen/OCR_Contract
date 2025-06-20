import React from 'react';
import { Box, Typography, TextField, Button, IconButton, MenuItem } from '@mui/material';
import Hamburger from '../assets/Frame.svg';
import Vector from '../assets/Vector.svg';
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
                <Typography sx={{ mb: 1, fontWeight: 500 }}>
                    <strong>Key:</strong> The name of the key that you want to extract.
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    <strong>Description:</strong> Give details about what you want to extract. Explain as you are talking to a real person. This will help the AI understand your requirement. You can also specify the format or give synonyms for the key.
                </Typography>
                <Typography sx={{ mb: 4 }}>
                    <strong>Example:</strong> Provide an example for the key. Respect the format that you want to receive the data in.
                </Typography>

                {/* Input Row */}
                <Box
                    sx={{
                        border: '1px solid #E0E0E0',
                        borderRadius: '4px',
                        padding: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginBottom: '1.5rem',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Box >
                        <img src={Hamburger} alt="image" style={{ height: '2rem', width: 18, }} />
                    </Box>


                    <TextField
                        label="Invoice_ID"
                        variant="outlined"
                        size="small"
                        sx={{ flex: 0.3 }}
                    />

                    {/* Description Field */}
                    <TextField
                        label="Invoice id/Invoice number/rec"
                        variant="outlined"
                        size="small"
                        sx={{ flex: 0.3 }}
                    // defaultValue="Invoice id/Invoice number/rec"
                    />

                    <TextField
                        select
                        label="Example:Invoice"
                        variant="outlined"
                        size="small"
                        sx={{ flex: 0.2 }}
                        defaultValue=""
                        SelectProps={{
                            IconComponent: () => (
                                <img
                                    src={dropdown}
                                    alt="dropdown"
                                    style={{ width: 16, height: 16, marginRight: 8 }}
                                />
                            )

                        }}
                    >
                        <MenuItem value="Invoice">Example: Invoice</MenuItem>
                    </TextField>


                    <Box>
                        <img src={Vector} alt="image" style={{ height: '2rem', width: 18, paddingLeft: '12px' }} />
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
