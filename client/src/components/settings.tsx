import React from 'react';
import { Box, Typography, TextField, Button, IconButton, MenuItem, Modal } from '@mui/material';
import Hamburger from '../assets/Frame.svg';
import Vector from '../assets/Vector.svg';
import { Margin } from '@mui/icons-material';
import dropdown from '../assets/Dropdown.svg';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import CustomBreadCrumbs from './CustomBreadCrumbs/CustomBreadCrumbs';
import { useNavigate } from 'react-router-dom';
import InfoBigIcon from '../assets/InfoBig.svg';
import { useContractContext } from '../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';

const SettingsContent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [fromloc, setFromloc] = useState('');

    const [addAnotherModal, setAddAnotherModal] = useState(false);
    const { jsonData, setJsonData } = useContractContext();
    const [fields, setFields] = useState<string[]>();
    const [descriptions, setDescriptions] = useState<string[]>();
    const [dataTypes, setDataTypes] = useState<string[]>();
    const [sections, setSections] = useState<Ifield[]>();

    const handleChangeSectionsLabel = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const updSections = [...(sections ?? [])];
        updSections[index].label = e.target.value;
        setSections(updSections);
    };

    const handleChangeSectionsDesc = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const updSections = [...(sections ?? [])];
        updSections[index].desc = e.target.value;
        setSections(updSections);
    };

    const handleChangeSectionsDataType = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const updSections = [...(sections ?? [])];
        updSections[index].datatype = e.target.value;
        setSections(updSections);
    };

    useEffect(() => {
        console.log('location.state:', location.state);

        if (location.state?.fromloc) {
            setFromloc(location.state.fromloc);
        }
    }, [location.state]);

    interface Ifield {
        label: string;
        value: string;
        aiflag: boolean;
        desc: string;
        datatype: string;
    }

    const handleAdd = () => {
        const newData = {
            label: '',
            value: '',
            aiflag: false,
            desc: '',
            datatype: '',
        };
        const updatedAdd = [...(sections ?? []), newData];
        setSections(updatedAdd);
    };

    useEffect(() => {
        const updfields = jsonData.formsections.map((field, index) => field.label);
        const upddesc = jsonData.formsections.map((field, index) => field.desc);
        const upddatatypes = jsonData.formsections.map((field, index) => field.datatype);
        setSections(jsonData.formsections);
    }, []);

    const handleAddAndCheck = () => {
        if (fromloc === 'dashboard') {
            setAddAnotherModal(true);
        }
    };

    return (
        <Box sx={{ width: '100%', minHeight: '100vh', overflowY: 'auto' }}>
            <div style={{ padding: '30px 30px 0px 30px' }}>
                <CustomBreadCrumbs replacetext="Settings" tonav="settings" />
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '1.5rem',
                        paddingTop: '4px',
                        paddingLeft: '14px',
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
                    <p
                        style={{
                            marginBottom: '1rem',
                            fontWeight: 500,
                            fontSize: '1rem',
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        <strong>Key:</strong> The name of the key that you want to extract.
                    </p>

                    <p
                        style={{
                            marginBottom: '1rem',
                            fontWeight: 500,
                            fontSize: '1rem',
                            fontFamily: 'Poppins, sans-serif',
                            lineHeight: '28px',
                            width: '80%',
                        }}
                    >
                        <strong>Description:</strong> Give details about what you want to extract.
                        Explain as you are talking to a real person. This will help the AI
                        understand your requirement. You can also specify the format or give
                        synonyms for the key.
                    </p>

                    <p
                        style={{
                            marginBottom: '2rem',
                            fontWeight: 500,
                            fontSize: '1rem',
                            fontFamily: 'Poppins, sans-serif',
                            lineHeight: '28px',
                        }}
                    >
                        <strong>Example:</strong> Provide an example for the key. Respect the format
                        that you want to receive the data in.
                    </p>
                    {/* Input Row */}
                    {sections?.map((field, index) => (
                        <Box
                            key={index}
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
                            <Box>
                                <img
                                    src={Hamburger}
                                    alt="image"
                                    style={{ height: '2rem', width: 18 }}
                                />
                            </Box>

                            {/* <Box 
                    sx={{ 
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        gap:'2rem',
                        width:'100%',
                       
                        
                        
                    }}> */}

                            <Box sx={{ width: '30%' }}>
                                <p style={{ margin: 1, color: '#606060' }}> Key 1</p>
                                <TextField
                                    placeholder="Invoice_ID"
                                    variant="outlined"
                                    onChange={e => handleChangeSectionsLabel(index, e)}
                                    value={field.label}
                                    size="small"
                                    sx={{
                                        '& input::placeholder': {
                                            color: '#42474E', // 👈 your desired placeholder color
                                            opacity: 1,
                                        },
                                    }}
                                    fullWidth
                                />
                            </Box>

                            <Box sx={{ width: '30%' }}>
                                <p style={{ margin: 1, color: '#606060' }}>Description</p>
                                {/* Description Field */}
                                <TextField
                                    placeholder="Invoice id/Invoice number/rec"
                                    onChange={e => handleChangeSectionsDesc(index, e)}
                                    value={field.desc}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        '& input::placeholder': {
                                            color: '#42474E', // 👈 your desired placeholder color
                                            opacity: 1,
                                        },
                                    }}
                                    fullWidth
                                    // defaultValue="Invoice id/Invoice number/rec"
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
                                <p
                                    style={{
                                        margin: 1,
                                        color: '#606060',
                                        fontFamily: 'poppins,sans-serif',
                                    }}
                                >
                                    Data Type
                                </p>

                                <Box sx={{ position: 'relative' }}>
                                    <TextField
                                        select
                                        placeholder="Example:Invoice"
                                        variant="outlined"
                                        size="small"
                                        onChange={e => handleChangeSectionsDataType(index, e)}
                                        defaultValue={field.datatype}
                                        value={field.datatype}
                                        fullWidth
                                        SelectProps={{
                                            IconComponent: () => null, // Remove default icon
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
                                        <MenuItem
                                            value="Invoice"
                                            sx={{ fontFamily: 'poppins,sans-serif' }}
                                        >
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
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        {/* Replace with your own icon or image if needed */}
                                        <img
                                            src={dropdown}
                                            alt="dropdown"
                                            style={{ width: 8, height: 8 }}
                                        />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* </Box> */}

                            <Box sx={{ marginLeft: 'auto' }}>
                                <img
                                    src={Vector}
                                    alt="image"
                                    style={{ height: '2rem', width: 18, paddingLeft: '24' }}
                                />
                            </Box>
                        </Box>
                    ))}

                    <Button
                        sx={{
                            color: '#007BFF',
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontFamily: 'Poppins, sans-serif',
                            textTransform: 'none',
                        }}
                        startIcon={<AddIcon />}
                        onClick={() => handleAdd()}
                    >
                        Add another Meta data
                    </Button>
                    <p></p>
                    <Button
                        variant="contained"
                        // startIcon = {<img src = {UploadBlueIcon} style={{width: "18px", height: "18px"}}/>}
                        onClick={() => handleAddAndCheck()}
                        style={{
                            textTransform: 'none',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: '500',
                            backgroundColor: '#1093FF',
                            boxShadow: 'none',
                            marginTop: '20px',
                        }}
                    >
                        <p>Submit</p>
                    </Button>

                    <Modal open={addAnotherModal}>
                        <Box
                            className="anotherbox"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: '20px 32px',
                                borderRadius: 4,
                            }}
                        >
                            <img
                                src={InfoBigIcon}
                                style={{ width: '131.22x', height: '86.65px' }}
                            />
                            <p className="suretext">
                                Do u want to continue your progress of New Extraction in the
                                Dashboard page
                            </p>
                            <Box className="sureandcan">
                                <Button
                                    onClick={() => {
                                        setAddAnotherModal(false);
                                    }}
                                    variant="outlined"
                                    style={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '10px 24px',
                                        border: '1px solid gray',
                                        fontFamily: 'Poppins',
                                        color: '#1093FF',
                                    }}
                                    // className="actions"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        navigate('/dashboard', {
                                            state: {
                                                fromloc: 'dashboard',
                                            },
                                        });
                                        setAddAnotherModal(false);
                                    }}
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '10px 24px',
                                        fontFamily: 'Poppins',
                                        backgroundColor: '#1093FF',
                                        boxShadow: 'none',
                                        '&.Mui-disabled': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                        },
                                    }}
                                    // className="actions"
                                >
                                    Next
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </div>
        </Box>
    );
};

export default SettingsContent;
