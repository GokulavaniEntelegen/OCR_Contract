import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, Outlet } from 'react-router-dom';
import './UserDashboard.scss';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { Grid, List, ListItem } from '@mui/material';
import ProgressStepper from './ProgressStepper';
import '@fontsource/roboto'; // Loads default weight (400)
import '@fontsource/poppins';
import { ReactNode } from 'react';
import { FC } from 'react';

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
    Modal,
} from '@mui/material';
import { styled } from '@mui/material/styles'; // Added styled for VisuallyHiddenInput
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
} from '@mui/icons-material';

import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { Drawer, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
// import ContentComponent from './contentcomponent';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './tabletrycss.css';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UploadCustomIcon from '../../assets/Upload.svg';
import DashboardCustomIcon from '../../assets/Dashboard.svg';
import RecentExtractionIcon from '../../assets/RecentExtraction.svg';
import ReportIcon from '../../assets/Report.svg';
import CreateTemplateIcon from '../../assets/CreateTemplate.svg';
import SubscriptionIcon from '../../assets/Subscription.svg';
import HelpIcon from '../../assets/Help.svg';
import MainLogoIcon from '../../assets/MainLogo.svg';
import SettingsCustomIcon from '../../assets/Setting.svg';
import NotificationIcon from '../../assets/Notification.svg';
import PsaiImg from '../../assets/Psai.png';
import SearchCustomIcon from "../../assets/SearchCustomIcon.svg";
import DownArrowIcon from "../../assets/DownArrow.svg";
import {Link} from "react-router-dom";
import ChatBotPop from 'client/src/components/ChatBotPop/ChatBotPop';

// VisuallyHiddenInput for file input (needed for the Upload button)
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
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
        flags,
    };
};

const rows = [
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Short on qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: '',
            name: '',
            address: 'outsource',
            startDate: '',
            batchGenerated: '',
            quantityReceive: '',
            vendorCode: '',
            billClause: '',
            tags: '',
        }
    ),
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Short on qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: 'outsource',
            name: '',
            address: '',
            startDate: '',
            batchGenerated: '',
            quantityReceive: '',
            vendorCode: 'outsource',
            billClause: '',
            tags: '',
        }
    ),
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Correct Qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: '',
            name: 'outsource',
            address: '',
            startDate: '',
            batchGenerated: '',
            quantityReceive: '',
            vendorCode: '',
            billClause: '',
            tags: '',
        }
    ),
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Correct Qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: '',
            name: '',
            address: '',
            startDate: '',
            batchGenerated: 'outsource',
            quantityReceive: '',
            vendorCode: '',
            billClause: '',
            tags: '',
        }
    ),
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Short on qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: '',
            name: '',
            address: '',
            startDate: '',
            batchGenerated: '',
            quantityReceive: '',
            vendorCode: '',
            billClause: 'outsource',
            tags: '',
        }
    ),
    createData(
        1234567890,
        'abcde',
        'sfdgbgbdbffda',
        '02 May, 2020',
        'tg1234',
        'Short on qty',
        12345,
        'Billed with 45 Days',
        'Design',
        {
            contact: '',
            name: '',
            address: '',
            startDate: '',
            batchGenerated: '',
            quantityReceive: 'outsource',
            vendorCode: '',
            billClause: '',
            tags: 'outsource',
        }
    ),
];

// Component to display a red dot on top right of the cell if flag === "outsource"

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

function DashboardLayout() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [userName, setUserName] = useState('Static User'); // Default to Static Use
    const [name, setName] = useState('Manikandan');
    useEffect(() => {
        const userEmail = localStorage.getItem('email');
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
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        // Navigate back to the login page
        navigate('/'); // Assuming your login route is "/"
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
        { key: 'dashboard', icon: DashboardCustomIcon, tooltip: 'Dashboard', link: "/dashboard" },
        { key: 'recent-extraction', icon: RecentExtractionIcon, tooltip: 'Recent Extraction', link: "#" },
        { key: 'reports-download', icon: ReportIcon, tooltip: 'Reports Download', link: "#" },
        { key: 'create-template', icon: CreateTemplateIcon, tooltip: 'Create Template', link: "#" },
        { key: 'subscription', icon: SubscriptionIcon, tooltip: 'Subscription', link: "#" },
        { key: 'help', icon: HelpIcon, tooltip: 'Help', link: "#" },
    ];

    const toggleHamburger = () => {
        setHamburgerOpen(prev => {
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
            newSelected = selected.filter(i => i !== index);
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
                        backgroundColor: '#ff9800',
                        borderRadius: '50%',
                        display: 'inline-block',
                    }}
                />
            }
            sx={{
                backgroundColor: '#fff4e5',
                color: '#ff9800',
                fontWeight: 500,
                fontSize: '0.875rem',
                paddingRight: '8px',
                '.MuiChip-icon': {
                    marginLeft: '4px',
                    marginRight: '4px',
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
                    backgroundColor: 'violet',
                    color: 'darkviolet',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    paddingRight: '2.5px',
                }}
            />
        );
    }

    function QuantityReceivedChip({ status }: { status: string }) {
        if (status === 'Short on qty') {
            return (
                <Chip
                    icon={<CancelIcon style={{ color: 'red' }} />}
                    label={status}
                    size="small"
                    sx={{ backgroundColor: '#fdecea', color: 'red', fontWeight: 500 }}
                />
            );
        }

        if (status === 'Correct Qty') {
            return (
                <Chip
                    icon={<CheckCircleIcon style={{ color: 'green' }} />}
                    label={status}
                    size="small"
                    sx={{ backgroundColor: '#e6f4ea', color: 'green', fontWeight: 500 }}
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

    function handleRowsPerPageChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    }

    const paginatedrows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const [searchQuery, setSeacrchQuery] = useState('');

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(0);

    return (
        <div className="container" style={{ display: 'flex', flex: 1, height: "100vh", overflowY: "hidden" }}>
            {/* <Box sx={{ display: 'flex', height: '100vh'}}>
      
      <IconButton
        onClick={toggleHamburger}
        sx={{
          position: 'fixed',
          top: 16,
          left: 12,
          zIndex: 1500,
          color: "white"
        //   backgroundColor: 'white',
        }}
      >
        <LogoDevIcon/>
      </IconButton>

      
    {hamburgerOpen && ( 
        <Box
          sx={{
            width: 60,
            height: '100vh',
            backgroundColor: '#1c2b36',
            paddingTop: 7,
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {icons.map(({ key, icon, tooltip }) => (
            <Tooltip title={tooltip} placement="right" key={key}>
              <IconButton
                onClick={() => handleIconClick(key)}
                sx={{
                  color: selectedKey === key && drawerOpen ? '#3399FF' : '#fff',
                  marginY: 1,
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
         )}

    //   Drawer with content
      {hamburgerOpen && ( 
        <Drawer
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          PaperProps={{
            sx: {
              width: 300,
              marginLeft: '60px',
            },
          }}
        >
          <Box p={2}>
            <ContentComponent selected={selectedKey} />
          </Box>
        </Drawer>
       )}

    //   Main Content Area
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: hamburgerOpen
            ? drawerOpen
              ? '360px'
              : '60px'
            : '0px',
          padding: 3,
          transition: 'margin-left 0.3s',
        }}
      />
      </Box> */}

            <Box className = "sidebar" sx={{ display: 'flex', height: '100vh'}}>
                <Box className = "sidebar"
                    sx={{
                        minwidth: '15px',
                        maxWidth: "400px",
                        width: "52px",
                        overflow: "hidden",
                        flexShrink: 0,
                        height: '100vh',
                        backgroundColor: '#051235',
                        paddingTop: 3,
                        // position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px',
                        transition: "all 0.3s ease",
                        "&: hover": {
                            width: "250px",
                            alignItems: "flex-start",
                        },
                        color: "white"
                    }}
                >
                    <Box sx = {{marginLeft: "10px",".sidebar:hover &": {marginLeft: "10px"}}}>
                    <IconButton
                        style={{ display: 'flex', alignItems: 'center', marginBottom: '65px', marginLeft: "-5px"}}
                    >
                        <img src={MainLogoIcon} alt="icon" width={40} height={40} />
                    </IconButton>
                    {icons.map(({ key, icon, tooltip, link }) => (
                        <Link key = {key} to = {link} style={{textDecoration: "none", color: "inherit"}}>
                        <Box style={{display: "flex", alignItems: "center", marginTop: "15px"}}>
                        <Tooltip title={tooltip} placement="right" key={key}>
                            <IconButton
                                // onClick={() => handleIconClick(key)}
                                sx={{
                                    color: selectedKey === key ? '#3399FF' : '#fff',
                                    marginY: 1,
                                }}
                            >
                                <img src={icon} alt="icon" width={20} height={20} />
                            </IconButton>
                        </Tooltip>
                        <Typography
                        className="sidebar-label"
                        sx={{
                            whiteSpace: "nowrap",
                            opacity: 0,
                            width: 0,
                            visibility: "hidden",
                            marginLeft: "15px",
                            transition: "opacity 0.5s ease, visibility 0.5s ease",
                            ".sidebar:hover &": {
                            opacity: 1,
                            visibility: "visible",
                            width: "auto"
                            },
                        }}
                        >
                        <p style={{fontFamily: "Poppins", fontSize: "14px"}}>{tooltip}</p>
                        </Typography>
                        </Box>
                        </Link>
                    ))}
                    </Box>
                </Box>
            </Box>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="topbar">
                    <div className="searchbar">
                        <TextField
                            variant="outlined"
                            placeholder="Search in clause"
                            size="small"
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    backgroundColor: '#F4F4F4',
                                    '& input': {
                                        fontSize: '16px', // 👈 Increase text size here
                                        marginLeft: '5px',
                                        fontFamily: "Poppins" 
                                    },
                                    '& .MuiInputAdornment-root svg': {
                                        fontSize: '25px', // 👈 Optional: increase icon size
                                        borderRight: '1px solid lightgray',
                                        paddingRight: '10px',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: '0.25px solid #C4C4C4',
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{paddingRight: "10px",borderRight: '1px solid lightgray'}}>
                                        <div style={{display: "flex", gap: "5px",alignItems: "center"}}>
                                        <img src = {SearchCustomIcon} style={{width: "13.54px", height: "13.54px"}}/>
                                        <IconButton><img src = {DownArrowIcon} style={{width:"8px", height: "5px"}}/></IconButton>
                                        </div>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div
                        className="settings-profile"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <div
                            style={{
                                paddingRight: 20,
                                paddingLeft: 20,
                                borderLeft: '1px solid #F0F0F0',
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: 'black',
                                    border: '1px solid lightgray',
                                    borderRadius: '18px',
                                    backgroundColor: '#F9F9F94D',
                                }}
                            >
                                <img src={SettingsCustomIcon} alt="icon" width={24} height={24} />
                            </IconButton>
                        </div>

                        <div
                            style={{
                                paddingRight: 20,
                                paddingLeft: 20,
                                borderLeft: '1px solid #F0F0F0',
                                borderRight: '1px solid #F0F0F0',
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: 'black',
                                    border: '1px solid lightgray',
                                    borderRadius: '18px',
                                    backgroundColor: '',
                                }}
                            >
                                <img src={NotificationIcon} alt="icon" width={24} height={24} />
                            </IconButton>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '3px 10px',
                                width: 'fit-content',
                                marginLeft: '20px',
                                borderRadius: '30px',
                                border: '1px solid #F0F0F0',
                                marginRight: '30px',
                            }}
                        >
                            <Avatar sx={{ bgcolor: '#3f51b5', marginRight: 1 }}>
                                {getInitials(name)}
                            </Avatar>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                                {name}
                            </Typography>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <Outlet />
                   
                </div>
                 <Box className="chat-bot">
                    <ChatBotPop/>
                    </Box>
            </div>
        </div>
    );
}

export default DashboardLayout;
