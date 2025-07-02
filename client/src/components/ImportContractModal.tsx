import React from 'react';
import {
  Modal,
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Popover,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import ProgressStepper from '../components/ProgressStepper';
import ProgressStepper from '../pages/Dashboard/ProgressStepper';
// import FileWithTickIcon from '../assets/FileWithTickIcon.svg';
import FileWithTickIcon from '../assets/FileWithTick.svg'
import CreateCustomIcon from '../assets/CreateCustom.svg';
import UploadCustomIcon from '../assets/UploadCustom.svg';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import InfoBigicon from '../assets/InfoBig.svg';

interface Props {
  showModal: boolean;
  step: number;
  contractTypes: string[];
  contractSelected: number | null;
  itemTags: string[];
  anchorElContractAdd: HTMLElement | null;
  anchorElAddView: HTMLElement | null;
  popopen: boolean;
  addViewOpen: boolean;
  newContract: string;
  newTag: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  addAnotherModal: boolean;



  // handlers
  setShowModal: (val: boolean) => void;
  setStep: (val: number) => void;
  setContractSelected: (val: number | null) => void;
  setNewContract: (val: string) => void;
  setNewTag: (val: string) => void;
  setAddAnotherModal: (val: boolean) => void;

  handleContractSelect: (index: number) => void;
  handleContractAddOpen: (event: any) => void;
  handleContractTypeSubmit: () => void;
  handleItemSelect: (index: number) => void;
  handleAddTagClose: () => void;
  handleNewTag: () => void;
  handleCloseContractAdd: () => void;
  handleNewContractAdd: () => void;
  handleItemTagsSubmit: () => void;
  navigate: (path: string, options?: any) => void;
}

const ImportContractModal: React.FC<Props> = ({
  showModal,
  step,
  contractTypes,
  contractSelected,
  itemTags,
  anchorElContractAdd,
  anchorElAddView,
  popopen,
  addViewOpen,
  newContract,
  newTag,
  fileInputRef,

  setShowModal,
  setStep,
  setContractSelected,
  setNewContract,
  setNewTag,
  setAddAnotherModal,

  handleContractSelect,
  handleContractAddOpen,
  handleContractTypeSubmit,
  handleItemSelect,
  handleAddTagClose,
  handleNewTag,
  handleCloseContractAdd,
  handleNewContractAdd,
  handleItemTagsSubmit
}) => {
  return (
    <>
      <Modal open={showModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50vw',
                        // height: "530px",
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
                                        // style = {{backgroundColor: (itemsSelectedIndexes.includes(index)) ? "#c9e5ff": "inherit", cursor: "pointer"}}
                                        onClick={() => handleItemSelect(index)}
                                    >
                                        <p
                                        // style={{color:(itemsSelectedIndexes.includes(index)) ? "white": "inherit" }}
                                        >
                                            {item}
                                        </p>
                                    </Box>
                                ))}
                                <Button
                                    // onClick={handleAddViewClick}
                                    onClick={() => {setAddAnotherModal(true)}}
                                    variant="text"
                                    startIcon={<AddIcon />}
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        color: '#1093FF',
                                        fontFamily: "Poppins"
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
                                        onChange={(event) => setNewTag(event.target.value)}

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

            {/* <Modal open = {addAnotherModal}>
                <Box className = "anotherbox"
                sx = {{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: "20px 32px",
                    borderRadius: 4,

                }}>
                    <img src = {InfoBigIcon} style={{width: "131.22px", height: "86.65px"}}/>
                    <p className='suretext'>To add another metadata entry, you need to navigate away from this page. Would you like to proceed?</p>
                    <Box className = "sureandcan">
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
                            navigate("/dashboard/settings", {
                                state: {
                                    fromloc: "dashboard"
                                }
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
            </Modal> */}
{/* 
             <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            /> */}
        
    </>
  );
};

export default ImportContractModal;
