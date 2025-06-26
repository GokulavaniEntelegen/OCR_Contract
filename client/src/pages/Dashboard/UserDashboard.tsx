import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import './UserDashboard.scss';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { Grid, List, ListItem} from "@mui/material";
import ProgressStepper from "./ProgressStepper";
import '@fontsource/roboto'; // Loads default weight (400)
import '@fontsource/poppins';
import { ReactNode } from "react";
import { FC } from "react";
import ImportBlueIcon from "../../assets/ImportBlueCustom.svg";
import { useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "client/api";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  Container,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar, // Added Button import for the card
  Modal
} from "@mui/material";
import { styled } from "@mui/material/styles"; // Added styled for VisuallyHiddenInput
import {
  Dashboard as DashboardIconMui,
  PictureAsPdf as PictureAsPdfIconMui,
  Notifications as NotificationsIconMui,
  AccountCircle as AccountCircleIconMui,
  ExitToApp as ExitToAppIconMui,
  UploadFile as UploadFileIcon, // Added UploadFileIcon for the button
  Description as DocIcon,
  Padding,
  Opacity, // Added DocIcon for 'Import Contract' button
} from "@mui/icons-material";

import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import {
  Drawer,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
// import ContentComponent from './contentcomponent';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SearchIcon from '@mui/icons-material/Search';
import {TextField, InputAdornment} from "@mui/material";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Chip} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './tabletrycss.css';
import UploadCustomIcon from "../../assets/Upload.svg"
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DashboardCustomIcon from "../../assets/Dashboard.svg";
import RecentExtractionIcon from "../../assets/RecentExtraction.svg";
import ReportIcon from "../../assets/Report.svg";
import CreateTemplateIcon from "../../assets/CreateTemplate.svg";
import SubscriptionIcon from "../../assets/Subscription.svg";
import HelpIcon from "../../assets/Help.svg"
import MainLogoIcon from "../../assets/MainLogo.svg"
import SettingsCustomIcon from "../../assets/Setting.svg"
import NotificationIcon from "../../assets/Notification.svg"
import PsaiImg from "../../assets/Psai.png";
import Tabletry from "client/src/components/Table/Tables";
import FileWithTickIcon from "../../assets/FileWithTick.svg";
import CreateCustomIcon from "../../assets/CreateCustom.svg";
// import ImportContractPop from "client/src/components/ImportContractPop";
import ImportContractPop from "../../components/ImportContractPop/importcontractpop"
import { useContractContext } from "client/src/context/AuthContext";

// VisuallyHiddenInput for file input (needed for the Upload button)
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type Flags = {
  contact: string;
  name: string;
  address: string;
  startDate: string;
  batchGenerated: string;
  quantityReceive: string;
  vendorCode: string;
  billClause: string;
  tags: string;
};

const createData = (
  contact: number,
  name: string,
  address: string,
  startDate: string,
  batchGenerated: string,
  quantityReceive: string,
  vendorCode: number,
  billClause: string,
  tags: string,
  flags: Flags
) => {
  return {
    contact,
    name,
    address,
    startDate,
    batchGenerated,
    quantityReceive,
    vendorCode,
    billClause,
    tags,
    flags
  };
};

const rows = [
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "", name: "", address: "outsource", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Correct Qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "", name: "outsource", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Correct Qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "outsource", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "outsource", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Billed with 45 Days", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "outsource", vendorCode: "", billClause: "", tags: "outsource"
        }
    )
];

// Component to display a red dot on top right of the cell if flag === "outsource"

type CellWithFlagProps = {
  flag?: string;         // optional, could be "outsource" or others
  children: ReactNode;   // any JSX passed between <CellWithFlag>...</CellWithFlag>
};

const CellWithFlag: React.FC<CellWithFlagProps> = ({ flag, children }) => {
    return (
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
            {flag === "outsource" && (
                <span
                    style={{
                        position: "absolute",
                        top: 2,
                        left: 0,
                        height: 7,
                        width: 7,
                        backgroundColor: "red",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                />
            )}
            <div style={{ paddingLeft: flag === "outsource" ? 7 : 0 }}>
                {children}
            </div>
        </div>
    );
};

const items = ["Contact No.", "Customer Name", "Customer Title", "Start Date", "End Date", "Auto Renewal Term", "Payment Term", "Termination Claus", "Tags"];

function Dashboard() {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("Static User"); // Default to Static Use
  const [name,setName] = useState("Manikandan");


    const fileInputRef = useRef<HTMLInputElement|null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const selectedfile = event.target.files?.[0];
    
            if(selectedfile) {
                const isValidType = selectedfile.type.startsWith("image/") || selectedfile.type === "application/pdf";
                if(!isValidType) {
                    alert("Upload a valid file type (img or pdf)");
                    return;
                }
                setFile(selectedfile);
                if(selectedfile) {
                    navigate("/dashboard/contract-scan", {state: {selectedfile}})
                }
            }
        };

  useEffect(() => {
      const userEmail = localStorage.getItem("email");
      if (userEmail) {
        setUserName(userEmail);
      }
    }, []); 
    //  const handleMenu = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      // Clear static user data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("email"); 
      // Navigate back to the login page
      navigate("/"); // Assuming your login route is "/"
      setAnchorEl(null); // Close the menu after logout
    };

  // Placeholder for file change, not functional in Dashboard context
//   const handleFileChange = (event) => {
//      const file = event.target.files?.[0];
//      if (file) {
//        console.log("File selected in Dashboard:", file.name);
       
//        // Navigate to translate page and send file through state
//        navigate('/TranslatePage', { state: { file } });
//       }
//     //console.log("File selected in Dashboard (not for upload here):");
//     // navigate("/TranslatePage", { state: { trigger: true } })
//     // This function is just a placeholder to prevent errors,
//     // actual file handling should be in TranslatorApp.
//   };

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const icons = [
    { key: 'dashboard', icon: DashboardCustomIcon, tooltip: 'Dashboard' },
    { key: 'recent-extraction', icon: RecentExtractionIcon, tooltip: 'Recent Extraction' },
    { key: 'reports-download', icon: ReportIcon, tooltip: 'Reports Download' },
    { key: 'create-template', icon: CreateTemplateIcon, tooltip: 'Create Template' },
    { key: 'subscription', icon: SubscriptionIcon, tooltip: 'Subscription' },
    { key: 'help', icon: HelpIcon, tooltip: 'Help' },
  ];

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => {
      if (prev) {
        // closing everything
        setDrawerOpen(false);
        setSelectedKey(null);
      }
      return !prev;
    });
  };

//   const handleIconClick = (key) => {
//     if (selectedKey === key && drawerOpen) {
//       setDrawerOpen(false);
//       setSelectedKey(null);
//     } else {
//       setSelectedKey(key);
//       setDrawerOpen(true);
//     }
//   };

  const getInitials = (name: string) => {
    return name?.charAt(0).toUpperCase(); // Gets first letter
  };

      const [selected, setSelected] = useState<(number | string)[]>([]);

    const handleAllSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((_, index) => index);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    const handleClick = (index: number) => {
        const selectedIndex = selected.indexOf(index);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selected, index];
        } else {
            newSelected = selected.filter((i) => i !== index);
        }
        setSelected(newSelected);
    };

    const isSelected = (index: number) => selected.indexOf(index) !== -1;

    type BatchFormatProps = {
    label: string;
    };
    const BatchFormat: FC<BatchFormatProps> = ({ label }) => (
        <Chip
            label={label}
            size="small"
            icon={
                <span
                    style={{
                        height: 8,
                        width: 8,
                        backgroundColor: "#ff9800",
                        borderRadius: "50%",
                        display: "inline-block",
                    }}
                />
            }
            sx={{
                backgroundColor: "#fff4e5",
                color: "#ff9800",
                fontWeight: 500,
                fontSize: "0.875rem",
                paddingRight: "8px",
                ".MuiChip-icon": {
                    marginLeft: "4px",
                    marginRight: "4px",
                },
            }}
        />
    );

    function TagsFormat({ label }: { label: string }) {
        return (
            <Chip
                label={label}
                size="small"
                sx={{
                    backgroundColor: "violet",
                    color: "darkviolet",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    paddingRight: "2.5px",
                }}
            />
        );
    }

    function QuantityReceivedChip({ status }: {status: string}) {
        if (status === "Short on qty") {
            return (
                <Chip
                    icon={<CancelIcon style={{ color: "red" }} />}
                    label={status}
                    size="small"
                    sx={{ backgroundColor: "#fdecea", color: "red", fontWeight: 500 }}
                />
            );
        }

        if (status === "Correct Qty") {
            return (
                <Chip
                    icon={<CheckCircleIcon style={{ color: "green" }} />}
                    label={status}
                    size="small"
                    sx={{ backgroundColor: "#e6f4ea", color: "green", fontWeight: 500 }}
                />
            );
        }

        return <span>{status}</span>;
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    function handlePageChange(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        setPage(newPage);
    }

    function handleRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    }

    const paginatedrows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const [searchQuery, setSeacrchQuery] = useState("");

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(0);


    // const [contractTypes, setContractTypes] = useState<string[]>(["Vendor & Sales Contracts", "Lease Contracts", "NDAs", "Employment Contracts"]);
    // const [contractSelected, setContractSelected] = useState<number | null>(null);

    const handleContractSelect = (index: number) => {
        if(contractSelected === index) {
            setContractSelected(null);
        }else {
        setContractSelected(index);
        }
    };

    const handleContractTypeSubmit = async() => {
        setStep((prev) => prev + 1);
        // await axios.patch(`${API_BASE_URL}/processdata`, {
        //     "contract-type": (contractSelected !== null) ? contractTypes[contractSelected] : ""
        // });
    };

    const {contractTypes, contractSelected, setContractSelected} = useContractContext();
    const [itemsSelectedIndexes, setItemsSelectedIndexes] = useState<number[]>([]);

    const handleItemSelect = (index: number) => {
        if(itemsSelectedIndexes.includes(index)) {
            const updatedItemsIndexes = itemsSelectedIndexes.filter((num) => num !== index);
            setItemsSelectedIndexes(updatedItemsIndexes);
        }else {
            const updatedItemsIndexes = [...itemsSelectedIndexes, index];
            setItemsSelectedIndexes(updatedItemsIndexes);
        }
    }

  return (
    <div>
        <Box sx={{width: "100%",minHeight: "100vh" }}>
            {/* Removed the original Paper with "Welcome" and "Navigate" text */}
            {/* Purple Gradient Banner/Card - Integrated here */}
            <div style={{padding: "50px 30px 0px 30px"}}>
            <Typography sx={{fontSize: "24px", fontWeight: "bold", fontFamily: "Poppins"}}>Hello Maria!</Typography>
            <p className = "simple" style={{color: "#808080", fontFamily: "Poppins"}}>Simple Dummy text of the printing</p>
            <Paper className="violet-paper"
                elevation={3}
                sx={{
                p: 4,
                paddingLeft: "20px",
                mt: 4, // Margin top to separate from AppBar
                borderRadius: 2, // Rounded corners
                // background: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)', // Purple gradient
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align content to the left as in the image
                gap: 2,
                mb: 4, // Margin bottom for spacing below the card

                backgroundImage: `url(${PsaiImg})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 25.5%',
                backgroundRepeat: 'no-repeat',
                }}
            >

                <div style={{display: "flex", gap: "50px", alignItems: "flex-start", flexDirection: "column", marginLeft: "15px"}}>
                <Typography sx={{fontSize: "20px", color: "#494A4E", maxWidth: "500px", fontWeight: "600", fontFamily: "Poppins"}}>
                To get started by uploading contracts or importing contracts to apply the functionalities.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                {/* <MuiLink
                    component={RouterLink}
                    to="/TranslatePage" // Link to your TranslatorApp
                    sx={{ textDecoration: 'none' }} // Remove underline from link
                > */}
                    <Button
                    variant="contained"
                    startIcon={<AddIcon/>}
                    // component = "label"
                    onClick={() => {setShowModal(true)}}
                    // No 'disabled' or 'loading' state here as this is just a navigation button
                    sx={{
                        // bgcolor: 'white', // White background for button
                        // color: '#6a11cb', // Purple text color
                        // '&:hover': {
                        //   bgcolor: '#f0f0f0', // Lighter hover
                        // },
                        fontSize:"14px",
                        width:"200px",
                        textTransform: "none",
                        backgroundColor: "#1093FF",
                        boxShadow: "none",
                        borderRadius: "4px",
                        fontFamily: "Poppins" // Rounded corners for button
                        // px: 2, // Padding horizontal
                        // py: 0.5, // Padding vertical
                    }}
                    >
                    Upload
                    {/* VisuallyHiddenInput is here, but its onChange won't trigger actual upload in Dashboard */}
                    {/* <VisuallyHiddenInput
                        type="file"
                        accept=".pdf,.docx,.csv" // Example accept types
                        onClick={handleFileChange} // Placeholder handler
                    /> */}
                    </Button>
                {/* </MuiLink> */}
                <ImportContractPop fromtext="dashboard"/>
                {/* <Button variant="text" onClick={() => {navigate("/dashboard/trial-page")}}>h</Button>    */}
                {/* <Button
                    variant="outlined" // Outlined button for "Import Contract"
                    startIcon={<img src ={ImportBlueIcon} style={{width: "18px", height : "18px"}}/>} // Example icon
                    // No 'disabled' or 'loading' state here
                    sx={{
                    //   color: 'white', // White text color
                    fontFamily: "Poppins",
                    borderColor: 'white', // White border
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    color: "#1093FF",
                    '&:hover': {
                        borderColor: 'black',
                        // color: '#f0f0f0',
                    },
                    textTransform: "none",
                    fontSize: "14px",
                    borderRadius: "4px", // Rounded corners for button
                    px: 3,
                    py: 1.5,
                    width: "280px"
                    }}
                >
                    Import Contract
                </Button> */}
                </Box>
                </div>
            </Paper>

            {/* Placeholder for the table content below the banner */}
            {/* <Paper elevation={1} sx={{ p: 2, minHeight: '300px', bgcolor: '#f5f5f5', width: "100%"}}>
                <Typography variant="body2" color="black" sx={{fontSize: "20px", fontWeight: "bold"}}>
                Uploaded Files:
                <Box style = {{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "22px", marginTop: "20px", marginLeft: "25px"}}>
                    <Box style = {{height: "200px", width: "200px", Padding: "20px", backgroundColor: "lightgray"}}></Box>
                    <Box style = {{height: "200px", width: "200px", Padding: "20px", backgroundColor: "lightgray"}}></Box>
                    <Box style = {{height: "200px", width: "200px", Padding: "20px", backgroundColor: "lightgray"}}></Box>
                    <Box style = {{height: "200px", width: "200px", Padding: "20px", backgroundColor: "lightgray"}}></Box>
                    <Box style = {{height: "200px", width: "200px", Padding: "20px", backgroundColor: "lightgray"}}></Box>
                </Box>
                </Typography>
            </Paper> */}
            <div className="uploadtables" style={{marginTop: "60px"}}>
            <Box sx = {{pointerEvents: "none", opacity: "0.3"}}>
                <Tabletry show = {true}/>
            </Box>
            </div>
            
            </div>

            </Box>

            <Modal open = {showModal}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "50vw",
                    // height: "530px",
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 6,
                    borderRadius: 4,
                }}
                >
                { step === 0 && (
                <Box className = "step0">
                <div className="st">
                <div className="stepper">
                <ProgressStepper activeStep={0}/>
                </div>
                </div>
                <div className="choose">
                <p style={{fontWeight: 500}}>Choose the contract type</p>
                </div>
                

                <div className="grid-container">

                {contractTypes.map((contractType, index) => (
                    <ListItem key = {index}
                    onClick = {() => handleContractSelect(index)} 
                    style={{cursor: "pointer",transition: "all 0.3s ease", backgroundColor: (contractSelected === index) ? "#c9e5ff" : "#F3F9FF", border: (contractSelected === index) ? "2px solid #2B80EC" : "none" }}
                    className="grid-item" sx={{py: "14px"}}>
                        <ListItemIcon style={{minWidth:"40px"}}>
                        <img src = {FileWithTickIcon} style={{width: "24", height: "24", color: (contractSelected === index) ? "#F3F9FF" : "inherit"}}/>
                        </ListItemIcon>
                        <ListItemText primary={<p style = {{color: (contractSelected === index) ? "white" : "#2B80EC", transition: "all 0.3s ease"}} >{contractType}</p>}/>
                    </ListItem>
                ))}

                <ListItem className="grid-item center" sx={{py: "14px"}}>
                    <ListItemIcon style={{minWidth:"40px"}}>
                    <img src = {CreateCustomIcon} style={{width: "24", height: "24"}}/>
                    </ListItemIcon>
                    <ListItemText primary={<p>Create a custom contract types</p>}/>
                </ListItem>
                </div>

                <div className="buttons">
                    <Button
                    onClick={() => {setShowModal(false); setContractSelected(null)}}
                    variant="outlined"
                    style={{
                        textTransform: "none", 
                        fontSize: "16px", 
                        padding: "10px 20px 10px 20px", 
                        border: "1px solid gray",
                        fontFamily: "Poppins",
                        color: "#1093FF"
                        }} 
                    className="actions">Cancel</Button>
                    <Button
                    onClick={() => {handleContractTypeSubmit()}}
                    disabled = {contractSelected === null}
                    variant="contained"
                    style={{
                        textTransform: "none", 
                        fontSize: "16px", 
                        padding: "10px 25px 10px 25px",
                        fontFamily: "Poppins",
                        // backgroundColor: "#1093FF",
                        boxShadow: "none"
                        }} 
                    className="actions">Next</Button>
                </div>
                </Box>
                )}

                { step === 1 && (
                    <Box className = "step1">
                        <div className="st">
                        <div className="stepper">
                        <ProgressStepper activeStep={1}/>
                        </div>
                        </div>
                        <div className="choose">
                        <p style={{fontWeight: 500}}>New Extraction</p>
                        </div>
                        <div className="descopt">
                            <p>Description</p>
                            <p style={{color: "gray"}}>(Optional)</p>
                        </div>
                        <Box className = "descbox">
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
                                    fontFamily :"Poppins",
                                    },
                                }}
                            />
                        </Box>

                        <Box className = "content-container">
                            {items.map((item, index) => (
                                <Box className = "content" 
                                key={index}
                                onClick = {() => {handleItemSelect(index)}}
                                style = {{ cursor: "pointer", backgroundColor: (itemsSelectedIndexes.includes(index)) ? "#c9e5ff": "inherit"}}>{item}</Box>
                            ))}
                            <Button
                            variant="text"
                            startIcon = {<AddIcon/>}
                            sx={{textTransform: "none", fontSize: "18px", color: "#1093FF"}}
                            >
                                Add another
                            </Button>
                        </Box>

                        <div className="buttons">
                            <Button
                            onClick={() => {setShowModal(false); setStep(0); setItemsSelectedIndexes([]); setContractSelected(null)}}
                            variant="outlined"
                            style={{
                                textTransform: "none", 
                                fontSize: "17px", 
                                padding: "10px 20px 10px 20px", 
                                border: "1px solid gray",
                                boxShadow : "none",
                                color: "#1093FF"
                                }} 
                            className="actions">Cancel</Button>
                            <Button
                            onClick={() => { setStep((prev) => prev + 1)}}
                            disabled = {itemsSelectedIndexes.length === 0}
                            variant="contained"
                            style={{
                                textTransform: "none", 
                                fontSize: "17px", 
                                padding: "10px 25px 10px 25px",
                                boxShadow : "none",
                                // backgroundColor: "#1093FF"
                                }} 
                            className="actions">Next</Button>
                        </div>

                    </Box>
                )}

                { step === 2 && (
                    <Box className = "step2">
                        
                        <div className="st">
                        <div className="stepper">
                        <ProgressStepper activeStep={2}/>
                        </div>
                        </div>
                        
                        <div className="choose">
                        <p style={{fontWeight: 500}}>Upload your files</p>
                        </div>

                        <Box className = "upload-box" onClick = {() => {fileInputRef.current?.click();}} style = {{cursor: 'pointer'}}>
                            <Box><IconButton><img src={UploadCustomIcon} alt="icon" width={24} height={24} /></IconButton></Box>

                            <Box sx = {{mt: "20px", textAlign: "center"}} className = "clickupl">
                                <p ><span style={{color: "#2B80EC"}}><u><a style={{cursor: "pointer"}}>Click to Upload</a></u></span>{' '}
                                <span>or Drag and drop </span></p>
                               <p>a contract PDF or Word doc</p>
                            </Box>
                        </Box>
                        <p className="or">Or</p>
                        <Box style = {{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <Button
                            onClick={() => {setShowModal(false); setStep(0)}}
                            variant="outlined"
                            className="skipbutt" 
                            style={{
                                textTransform: "none", 
                                fontSize: "18px", 
                                padding: "10px 20px 10px 20px", 
                                border: "1px solid gray",
                                fontFamily: "Poppins"
                                }} 
                            >Skip
                        </Button>
                        </Box>
                    </Box>
                )}
            </Box>
            </Modal>
            <input 
            type = "file"
            ref = {fileInputRef}
            onChange={handleFileChange}
            style={{display: "none"}}
            />
    </div>
  );
}

export default Dashboard;