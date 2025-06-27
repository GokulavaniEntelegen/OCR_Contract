import React, { useRef, useState } from 'react';
import {
    IconButton,
    Popover,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    LinearProgress,
    Button,
    styled,
    keyframes,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import BugReportIcon from '@mui/icons-material/BugReport';
import HistoryIcon from '@mui/icons-material/History';
import DeleteIcon from '@mui/icons-material/Delete';
import avatar from '../assets/avatar.svg';
import profile from '../assets/profile.svg';
import avatar3 from '../assets/avatar3.svg';
import avatar4 from '../assets/avatar4.svg';
import avatar5 from '../assets/avatar5.svg';

const NotificationPanel: React.FC = () => {
    const iconRef = useRef<HTMLButtonElement | null>(null); // ✅ add type
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null); // ✅ add type
    const [showActivities, setShowActivities] = useState<boolean>(false); // ✅ add type
    const [clicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setAnchorEl(iconRef.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setShowActivities(false);
    };

    const toggleActivities = () => {
        setShowActivities(prev => !prev);
    };



    const handleButtonClick = () => {
        setIsClicked(true); // sets button to grey
        toggleActivities(); // your existing logic
    };



    const open = Boolean(anchorEl);

    const progressStripe = keyframes`
  0% {
    background-position: 1 0;
  }
  100% {
    background-position: 40px 0;
  }
`;

    const StripedLinearProgress = styled(LinearProgress)({
        height: 6,
        borderRadius: 4,
        backgroundColor: '#e0e0e0',

        '& .MuiLinearProgress-bar': {
            backgroundImage: `repeating-linear-gradient(
      45deg,
      #2B80EC,
     #2B80EC 10px,
      #ACDDFF 10px,
      #ACDDFF 20px
    )`,
            animation: `${progressStripe} 1s linear infinite`,
            borderRadius: 4,
        },
    });

    return (
        <>
            <IconButton ref={iconRef} onClick={handleClick} color="inherit">
                <NotificationsIcon />
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                // Paper={{
                //     sx: {
                //         mt: 12,
                //         mr: 2,
                //         width: 340,
                //         height: '100vh',
                //         overflowY: 'auto',
                //         borderRadius: 3,
                //         boxShadow: 3,
                //         position: '',
                //         right: '20px',
                //     },
                //     style: {
                //         width: 360,
                //         padding: 16,
                //         borderRadius: 12,
                //         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                //     },
                // }}
                slotProps={{
                    paper: {
                        sx: {
                            // mt: 2,
                            mr: 2,
                            width: "360px",
                            maxHeight: '90vh',       // 🔧 Set max height
                            padding: 2,
                            borderRadius: 3,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            display: 'flex',         // 🔧 Make inner layout vertical
                            flexDirection: 'column',
                        },
                    },
                }}
            >
                <p style={{ fontWeight: 500, fontSize: '1rem', margin: 0, fontFamily: 'Poppins, sans-serif', }}>
                    AI is doing its thing
                </p>

                <p style={{
                    color: 'rgba(0, 0, 0, 0.6)', // equivalent to theme.text.secondary
                    fontSize: '0.875rem',
                    marginTop: '4px',
                    fontFamily: 'Poppins, sans-serif',
                }}>
                    Hang tight! This may take a while. You can use Contractbook or leave the page. We'll send you an email once the import is completed.
                </p>

                <Box sx={{ mt: 2, fontFamily: 'Poppins, sans-serif' }}>
                    <StripedLinearProgress variant="determinate" value={33} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '4px' }}>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            margin: 0,
                            color: 'rgba(0, 0, 0, 0.87)'
                        }}>
                            33% complete
                        </p>
                        <p style={{
                            fontSize: '0.75rem',
                            margin: 0,
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}>
                            Step 2 of 2
                        </p>
                    </Box>
                </Box>



                {/* <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 1.5, mb: 1.5, backgroundColor: '#666', '&:hover': { backgroundColor: '#444' } }}
                    onClick={toggleActivities}
                >
                    {showActivities ? 'Hide Activities' : 'Review All'}
                </Button> */}
                {showActivities && (
                    <Box mt={1}>
                        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                            Files in Progress
                        </Typography>

                        {/* Scrollable container */}
                        <Box
                            sx={{
                                maxHeight: '190px',
                                overflowY: 'auto',
                                pr: 1,
                                // ✅ Hide scrollbar in WebKit browsers (Chrome, Safari)
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}
                        >
                            {[...Array(10)].map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        backgroundColor: '#F5FAFF',
                                        borderRadius: '12px',
                                        padding: '12px 16px',
                                        mb: 1.5,
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                                        background: `linear-gradient(to right, #E0F2FF ${(index + 1) * 10}%, #ffffff ${(index + 1) * 10}%)`,
                                    }}
                                >
                                    {/* Blue left border accent */}
                                    <Box
                                        sx={{
                                            width: '4px',
                                            height: '100%',
                                            backgroundColor: '#1A90FF',
                                            borderRadius: '4px',
                                            marginRight: '12px',
                                        }}
                                    />

                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                color: '#1F1F1F',
                                                mb: '4px',
                                            }}
                                        >
                                            Basic-Non-Disclosure-Agreement.pdf
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                color: '#4D4D4D',
                                                display: 'flex',
                                                gap: '8px',
                                            }}
                                        >
                                            <span>Processing</span>
                                            <span>Running OCR</span>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleButtonClick}
                    sx={{
                        mt: 1.5,
                        mb: 1.5,
                        backgroundColor: clicked ? '#909090' : '#1093FF',
                        '&:hover': {
                            backgroundColor: clicked ? '#808080' : '#0d82e6',
                        },
                    }}
                >
                    Review All
                </Button>



                <>
                    <Divider />
                    <Box mt={1}>
                        <Typography variant="subtitle2" fontWeight="bold">
                            Recent Activities
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemAvatar>

                                    <Avatar src={avatar} />
                                    {/* </Avatar> */}
                                </ListItemAvatar>
                                <ListItemText primary="Added new template" secondary="Just now" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={profile} />
                                </ListItemAvatar>
                                <ListItemText primary="Edited Contract 45789" secondary="59 minutes ago" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={avatar3} />
                                </ListItemAvatar>
                                <ListItemText primary="Submitted a bug" secondary="12 hours ago" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={avatar4} />
                                </ListItemAvatar>
                                <ListItemText primary="Modified A data in Page X" secondary="Today, 11:59 AM" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={avatar5} />
                                </ListItemAvatar>
                                <ListItemText primary="Deleted a page in Project X" secondary="Feb 2, 2025" />
                            </ListItem>
                        </List>
                    </Box>
                </>

            </Popover>
        </>
    );
};

export default NotificationPanel;
