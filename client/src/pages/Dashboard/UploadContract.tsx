import {
    Box,
    Button,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Modal,
    Popover,
    TextField,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { ReactNode } from 'react';
import FileWithTickIcon from '../../assets/FileWithTick.svg';
import CreateCustomIcon from '../../assets/CreateCustom.svg';
import UploadCustomIcon from '../../assets/Upload.svg';
import InfoBigIcon from '../../assets/InfoBig.svg';
import { useContractContext } from '../../context/AuthContext';
import ProgressStepper from './ProgressStepper';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

type CellWithFlagProps = {
    flag?: string; // optional, could be "outsource" or others
    children: ReactNode; // any JSX passed between <CellWithFlag>...</CellWithFlag>
};

const CellWithFlag: React.FC<CellWithFlagProps> = ({ flag, children }) => {
    return (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            {flag === 'outsource' && (
                <span
                    style={{
                        position: 'absolute',
                        top: 2,
                        left: 0,
                        height: 7,
                        width: 7,
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        zIndex: 1,
                    }}
                />
            )}
            <div style={{ paddingLeft: flag === 'outsource' ? 7 : 0 }}>{children}</div>
        </div>
    );
};

type UploadContractProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const items = [
    'Contact No.',
    'Customer Name',
    'Customer Title',
    'Start Date',
    'End Date',
    'Auto Renewal Term',
    'Payment Term',
    'Termination Claus',
    'Tags',
];

const UploadContract: React.FC<UploadContractProps> = ({ showModal, setShowModal }) => {
    const [step, setStep] = useState(0);
    const [addAnotherModal, setAddAnotherModal] = useState(false);
    const [contractSelected, setContractSelected] = useState<number | null>(null);
    const [anchorElContractAdd, setAnchorElContractAdd] = useState<null | HTMLElement>(null);
    const { jsonData, setJsonData } = useContractContext();
    const [itemsSelectedIndexes, setItemsSelectedIndexes] = useState<number[]>([]);
    const [anchorElAddView, setAnchorElAddView] = useState<HTMLElement | null>(null);
    const [newTag, setNewTag] = useState('');
    const [itemTags, setItemTags] = useState<string[]>(items);
    const [newContract, setNewContract] = useState<string>('');
    const [contractTypes, setContractTypes] = useState<string[]>([
        'Vendor & Sales Contracts',
        'Lease Contracts',
        'NDAs',
        'Employment Contracts',
    ]);

    const addViewOpen = Boolean(anchorElAddView);
    const popopen = Boolean(anchorElContractAdd);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleItemSelect = (index: number) => {
        if (itemsSelectedIndexes.includes(index)) {
            const updatedItemsIndexes = itemsSelectedIndexes.filter(num => num !== index);
            setItemsSelectedIndexes(updatedItemsIndexes);
        } else {
            const updatedItemsIndexes = [...itemsSelectedIndexes, index];
            setItemsSelectedIndexes(updatedItemsIndexes);
        }
    };

    const handleContractAddOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElContractAdd(event.currentTarget);
    };
    const handleCloseContractAdd = () => {
        setAnchorElContractAdd(null);
    };

    const handleAddTagClose = () => {
        setAnchorElAddView(null);
        setNewTag('');
    };

    const handleNewTag = () => {
        if (newTag !== '') {
            const updatedView = [...itemTags, newTag];
            setItemTags(updatedView);
            handleAddTagClose();
            setNewTag('');
        }
    };

    const handleContractTypeSubmit = () => {
        setStep(prev => prev + 1);
        // await axios.patch(`${API_BASE_URL}/processdata`, {
        //     "contract-type": (contractSelected !== null) ? contractTypes[contractSelected] : ""
        // });
        contractSelected !== null
            ? setJsonData(prev => ({
                  ...prev,
                  processdata: {
                      ...prev.processdata,
                      'contract-type': contractTypes[contractSelected],
                  },
              }))
            : '';
        setContractSelected(null);
    };

    const handleItemTagsSubmit = () => {
        setStep(prev => prev + 1);

        if (itemsSelectedIndexes.length !== 0) {
            const itemsSelected = itemsSelectedIndexes.map(index => itemTags[index]);
            setJsonData(prev => ({
                ...prev,
                processdata: {
                    ...prev.processdata,
                    tags: itemsSelected,
                },
            }));
        }
        setItemsSelectedIndexes([]);
    };

    const handleNewContractAdd = () => {
        if (newContract !== '') {
            const updatedContractTypes = [...contractTypes, newContract];
            setContractTypes(updatedContractTypes);
            setNewContract('');
            setAnchorElContractAdd(null);
        }
    };
    const handleContractSelect = (index: number) => {
        if (contractSelected === index) {
            setContractSelected(null);
        } else {
            setContractSelected(index);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedfile = event.target.files?.[0];

        if (selectedfile) {
            const isValidType =
                selectedfile.type.startsWith('image/') || selectedfile.type === 'application/pdf';
            if (!isValidType) {
                alert('Upload a valid file type (img or pdf)');
                return;
            }
            setFile(selectedfile);
            if (selectedfile) {
                navigate('/dashboard/contract-scan', { state: { selectedfile } });
            }
        }
    };

    return (
        <Box>
            <Modal open={showModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50vw',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 6,
                        borderRadius: 4,
                    }}
                >
                    {step === 0 && (
                        <Box className="step0">
                            <div className="st">
                                <div className="stepper">
                                    <ProgressStepper activeStep={0} />
                                </div>
                            </div>
                            <div className="choose">
                                <p style={{ fontWeight: 500 }}>Choose the contract type</p>
                            </div>

                            <div className="grid-container">
                                {contractTypes.map((contractType, index) => (
                                    <ListItem
                                        key={index}
                                        onClick={() => handleContractSelect(index)}
                                        style={{
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            backgroundColor:
                                                contractSelected === index ? '#c9e5ff' : '#F3F9FF',
                                            border: contractSelected === index ? 'none' : 'none',
                                        }}
                                        className="grid-item"
                                        sx={{ py: '14px' }}
                                    >
                                        <ListItemIcon style={{ minWidth: '40px' }}>
                                            <img
                                                src={FileWithTickIcon}
                                                style={{
                                                    width: '24',
                                                    height: '24',
                                                    color:
                                                        contractSelected === index
                                                            ? '#F3F9FF'
                                                            : 'inherit',
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <p
                                                    style={{
                                                        color:
                                                            contractSelected === index
                                                                ? '#2B80EC'
                                                                : '#2B80EC',
                                                        transition: 'all 0.3s ease',
                                                    }}
                                                >
                                                    {contractType}
                                                </p>
                                            }
                                        />
                                    </ListItem>
                                ))}

                                <ListItem
                                    className="grid-item center"
                                    sx={{ py: '14px' }}
                                    onClick={event => handleContractAddOpen(event)}
                                >
                                    <ListItemIcon style={{ minWidth: '40px' }}>
                                        <img
                                            src={CreateCustomIcon}
                                            style={{ width: '24', height: '24' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary={<p>Create a custom contract types</p>} />
                                </ListItem>
                            </div>

                            <div className="buttons">
                                <Button
                                    onClick={() => {
                                        setShowModal(false);
                                        setContractSelected(null);
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
                                    className="actions"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleContractTypeSubmit}
                                    disabled={contractSelected === null}
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
                                    className="actions"
                                >
                                    Next
                                </Button>
                            </div>
                        </Box>
                    )}

                    {step === 1 && (
                        <Box className="step1">
                            <div className="st">
                                <div className="stepper">
                                    <ProgressStepper activeStep={1} />
                                </div>
                            </div>
                            <div className="choose">
                                <p style={{ fontWeight: 500 }}>New Extraction</p>
                            </div>
                            <div className="descopt">
                                <p>Description</p>
                                <p style={{ color: 'gray' }}>(Optional)</p>
                            </div>
                            <Box className="descbox">
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={7}
                                    placeholder="Enter your description here..."
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            backgroundColor: '#EFF8FF', // light blue background
                                            '& fieldset': {
                                                borderColor: '#2B80EC', // blue border
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#2B80EC', // darker blue on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#2B80EC', // even darker blue when focused
                                            },
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            fontSize: '16px', // increase placeholder size
                                            color: '#555',
                                            fontFamily: 'Poppins',
                                        },
                                    }}
                                />
                            </Box>

                            <Box className="content-container">
                                {itemTags.map((item, index) => (
                                    <Box
                                        className="content"
                                        onClick={() => handleItemSelect(index)}
                                    >
                                        <p>{item}</p>
                                    </Box>
                                ))}
                                <Button
                                    onClick={() => {
                                        setAddAnotherModal(true);
                                    }}
                                    variant="text"
                                    startIcon={<AddIcon />}
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        color: '#1093FF',
                                        fontFamily: 'Poppins',
                                    }}
                                >
                                    Add another
                                </Button>
                            </Box>

                            <Popover
                                open={addViewOpen}
                                anchorEl={anchorElAddView}
                                onClose={handleAddTagClose}
                                disableScrollLock
                                anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                                sx={{ boxShadow: 'none', marginLeft: '-10px', marginTop: '-50px' }}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            boxShadow: 'none',
                                            borderRadius: '20px',
                                        },
                                    },
                                }}
                            >
                                <div className="addview-box">
                                    <div className="addviewtop">
                                        <p>Add Tag</p>
                                        <IconButton onClick={handleAddTagClose}>
                                            <CloseIcon sx={{ color: 'black' }} />
                                        </IconButton>
                                    </div>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: '14px',
                                            color: '#606060',
                                            marginTop: '15px',
                                            fontFamily: 'Poppins',
                                        }}
                                    >
                                        Enter a new tag name
                                    </p>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Add tag"
                                        value={newTag}
                                        onChange={event => setNewTag(() => event.target.value)}
                                        sx={{
                                            marginBottom: '7px',
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
                                    <div
                                        className="buttons"
                                        style={{ padding: '20px 0px 0px 0px' }}
                                    >
                                        <Button
                                            onClick={handleAddTagClose}
                                            variant="outlined"
                                            style={{
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                padding: '10px 24px',
                                                border: '1px solid gray',
                                                color: '#1093FF',
                                            }}
                                            className="actions"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleNewTag}
                                            variant="contained"
                                            style={{
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                padding: '10px 24px',
                                                backgroundColor: '#1093FF',
                                                boxShadow: 'none',
                                            }}
                                            className="actions"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Popover>

                            <div className="buttons">
                                <Button
                                    onClick={() => {
                                        setShowModal(false);
                                        setStep(0);
                                    }}
                                    variant="outlined"
                                    style={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '10px 24px',
                                        border: '1px solid gray',
                                        boxShadow: 'none',
                                        color: '#1093FF',
                                    }}
                                    className="actions"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleItemTagsSubmit();
                                    }}
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '10px 24px',
                                        boxShadow: 'none',
                                        backgroundColor: '#1093FF',
                                        '&.Mui-disabled': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                        },
                                    }}
                                    className="actions"
                                >
                                    Next
                                </Button>
                            </div>
                        </Box>
                    )}

                    {step === 2 && (
                        <Box className="step2">
                            <div className="st">
                                <div className="stepper">
                                    <ProgressStepper activeStep={2} />
                                </div>
                            </div>

                            <div className="choose">
                                <p style={{ fontWeight: 500 }}>Upload your files</p>
                            </div>

                            <Box
                                className="upload-box"
                                onClick={() => {
                                    fileInputRef.current?.click();
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <Box>
                                    <IconButton
                                        onClick={() => {
                                            fileInputRef.current?.click();
                                        }}
                                    >
                                        <img
                                            src={UploadCustomIcon}
                                            alt="icon"
                                            width={24}
                                            height={24}
                                        />
                                    </IconButton>
                                </Box>

                                <Box sx={{ mt: '20px', textAlign: 'center' }} className="clickupl">
                                    <p>
                                        <span style={{ color: '#2B80EC' }}>
                                            <u>
                                                <a style={{ cursor: 'pointer' }}>Click to Upload</a>
                                            </u>
                                        </span>{' '}
                                        <span>or Drag and drop </span>
                                    </p>
                                    <p>a contract PDF or Word doc</p>
                                </Box>
                            </Box>

                            <p className="or">Or</p>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                }}
                            >
                                <Button
                                    onClick={() => {
                                        setShowModal(false);
                                        setStep(0);
                                    }}
                                    variant="outlined"
                                    className="skipbutt"
                                    style={{
                                        textTransform: 'none',
                                        // fontSize: '18px',
                                        padding: '10px 24px',
                                        border: '1px solid #72777F',
                                        fontFamily: 'Poppins',
                                    }}
                                >
                                    Skip
                                </Button>
                            </Box>
                        </Box>
                    )}
                    <Popover
                        open={popopen}
                        anchorEl={anchorElContractAdd}
                        onClose={handleCloseContractAdd}
                        disableScrollLock
                        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                        sx={{ boxShadow: 'none', marginLeft: '-600px', marginTop: '-50px' }}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    boxShadow: 'none',
                                    borderRadius: '20px',
                                },
                            },
                        }}
                    >
                        <div className="addview-box">
                            <div className="addviewtop">
                                <p>Add custom cotract type</p>
                                <IconButton onClick={handleCloseContractAdd}>
                                    <CloseIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </div>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    color: '#606060',
                                    marginTop: '15px',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                Enter a new contract type
                            </p>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Contract type"
                                value={newContract}
                                onChange={event => setNewContract(event.target.value)}
                                sx={{
                                    marginBottom: '7px',
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
                            <div className="buttons" style={{ padding: '20px 0px 0px 0px' }}>
                                <Button
                                    onClick={handleCloseContractAdd}
                                    variant="outlined"
                                    style={{
                                        textTransform: 'none',
                                        fontSize: '16px',
                                        padding: '10px 20px 10px 20px',
                                        border: '1px solid gray',
                                        color: '#1093FF',
                                    }}
                                    className="actions"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleNewContractAdd}
                                    variant="contained"
                                    style={{
                                        textTransform: 'none',
                                        fontSize: '16px',
                                        padding: '10px 25px 10px 25px',
                                        backgroundColor: '#1093FF',
                                        boxShadow: 'none',
                                    }}
                                    className="actions"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </Popover>
                </Box>
            </Modal>

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
                    <img src={InfoBigIcon} style={{ width: '131.22x', height: '86.65px' }} />
                    <p className="suretext">
                        To add another metadata entry, you need to navigate away from this page.
                        Would you like to proceed?
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
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                navigate('/dashboard/settings', {
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
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </Box>
    );
};
export default UploadContract;
