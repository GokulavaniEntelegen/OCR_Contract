import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Chip, Button ,Box, IconButton, Tab, Tabs, Popover, Stack, ButtonBase, InputAdornment, List, ListItem, ListItemText ,ListItemIcon, TablePaginationProps} from "@mui/material";
import React, { use, useEffect, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import '@fontsource/poppins';
import { ReactNode } from "react";
import { FC } from "react";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AddIcon from '@mui/icons-material/Add';
import Filter_BlackIcon from "../assets/Filter_Black.svg";
import "./Tables.scss";
import CloseIcon from '@mui/icons-material/Close';
import { BorderLeft, Category } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import RenameIcon from "../assets/Rename.svg";
import DuplicateIcon from "../assets/Duplicate.svg";
import DeleteCustomIcon from "../../assets/Delete.svg";
import LabelIcon from "../assets/Label.svg"
import ExportNewIcon from "../../assets/ExportNew.svg"
import ChatBotIcon from "../../assets/ChatBot.svg"
import LabelAs from "../LabelAsPop/LabelAsPop";
import OutSourceIcon from "../../assets/OutSource.svg"
import ExpandDownIcon from "../../assets/ExpandDown.svg"
import FilterBlueIcon from "../../assets/FilterBlue.svg"
import CancelCustomIcon from "../../assets/CancelCustom.svg"
import DateIcon from "../../assets/DateIcon.svg";
import LeftCustomIcon from "../../assets/LeftCustom.svg";
import RightCustomIcon from "../../assets/RightCustom.svg";
import axios from "axios";
import { API_BASE_URL } from "../../../api";
import DeletePopoverExample from "../deletepopexample";


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
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "", name: "", address: "outsource", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Correct Qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "", name: "outsource", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Correct Qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "outsource", quantityReceive: "", vendorCode: "", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "", billClause: "outsource", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "outsource", vendorCode: "", billClause: "", tags: "outsource"
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
    createData(
        1234567890, "abcde", "sfdgbgbdbffda", "02 May, 2020", "tg1234", "Short on qty", 12345, "Payable within 15 days of invoice", "Design",
        {
            contact: "outsource", name: "", address: "", startDate: "", batchGenerated: "", quantityReceive: "", vendorCode: "outsource", billClause: "", tags: ""
        }
    ),
];

type CellWithFlagProps = {
  flag?: boolean;         // optional, could be "outsource" or others
  children: ReactNode;   // any JSX passed between <CellWithFlag>...</CellWithFlag>
};

const CellWithFlag: React.FC<CellWithFlagProps> = ({ flag, children }) => {
    return (
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
            {(flag) && (
                <span
                    style={{
                        position: "absolute",
                        top: 0,
                        left: -10,
                        right: 0,
                        height: 7,
                        width: 7,
                        padding:0,
                        // backgroundColor: "red",
                        // borderRadius: "50%",
                        zIndex: 1,
                    }}
                ><img src={OutSourceIcon} style={{width: "13.07px", height: "12.4px"}}/></span>
            )}
            <div style={{ paddingLeft: (flag) ? 4 : 0 }}>
                {children}
            </div>
        </div>
    );
};

const items = ["Contact No.", "Customer Name", "Customer Title", "Start Date", "End Date", "Auto Renewal Term", "Payment Term", "Termination Claus", "Tags"];

const Tabletry: React.FC<{ show: boolean }> = ({show}) => {

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
                fontFamily: "Poppins",
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
                    fontFamily: "Poppins"
                }}
            />
        );
    }

    function QuantityReceivedChip({ status }: {status: string}) {
        if (status === "Short on qty") {
            return (
                <Box display="flex" alignItems="center" gap={0.5}>
                <CancelIcon sx={{ color: "red", fontSize: "18px" }} />
                <span style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: 500, fontSize: "14px" }}>
                    <p style={{maxWidth: "10ch", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{status}</p>
                </span>
                </Box>
            );
        }

        if (status === "Correct Qty") {
            return (
                <Box display="flex" alignItems="center" gap={0.5}>
                <CheckCircleIcon sx={{ color: "green", fontSize: "18px" }} />
                <span style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: 500, fontSize: "14px" }}>
                    {status}
                </span>
                </Box>
            );
        }

        return <span><p style={{maxWidth: "20ch", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{status}</p></span>;
    }
    
    useEffect(() => {
        if(show) {
            setRowsPerPage(11)
        } else {
            setRowsPerPage(8)
        }
        console.log("Shows useeffect has been called");
    },[show])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);


    function handlePageChange(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        setPage(newPage);
    }

    function handleRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    }

    // const paginatedrows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const [searchQuery, setSeacrchQuery] = useState("");

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(0);

    
    const [tab, setTab] = React.useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab);
    };
    
    const [anchorElFilter, setAnchorElFilter] = useState<HTMLElement |null>(null);
    
    const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElFilter(event.currentTarget);
    }

    const handleFilterClose = () => {
        setAnchorElFilter(null);
    }

    const filterOpen = Boolean(anchorElFilter);
    const categories: string[] = ["Contact No.", "Customer Name", "Contract Title", "Start Date", "End Date", "Auto Renewal Term", "Payment Term", "Termination Claus", "Tags"];
    const subcategories: string[] = ["IT Services Contracts", "Sub-Contract 1", "SLA 1", "Master service level Agreement 1", "Sub-Contract 2", "SLA 2", "Master service level Agreement 2"];

    const [subchecked, setSubchecked] = useState<string[]>([]);

    const handleToggle = (value: string) => () => {
    if (value === 'all') {
      if (subchecked.length === subcategories.length) {
        setSubchecked([]);
      } else {
        setSubchecked([...subcategories]);
      }
    } else {
      const currentIndex = subchecked.indexOf(value);
      const newChecked = [...subchecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setSubchecked(newChecked);
    }
  };

  const isAllSelected = subchecked.length === subcategories.length;
  const [anchorElAddView, setAnchorElAddView] = useState<HTMLElement |null>(null);

  const handleAddViewClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElAddView(event.currentTarget);
    }

    const handleAddViewClose = () => {
        setAnchorElAddView(null);
    }

    const addViewOpen = Boolean(anchorElAddView);

    const [newView, setNewView] = useState("");

    interface CustomPaginationActionsProps {
        count: number;
        page: number;
        rowsPerPage: number;
        onPageChange: TablePaginationProps['onPageChange'];
    }

    const CustomPaginationActions: React.FC<CustomPaginationActionsProps> = ({
    count,
    page,
    rowsPerPage,
    onPageChange,
    }) => {
    const totalPages = Math.ceil(count / rowsPerPage);

    const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={handleBack} disabled={page === 0} style={{flex: 1}}>
            <img src = {LeftCustomIcon} style={{width: "11.67px", height: "11.67px"}}/>
        </IconButton>
        <span style={{ fontWeight: 500, fontFamily: "Poppins" }}>
            Page {page + 1} of {totalPages}
        </span>
        <IconButton onClick={handleNext} disabled={page >= totalPages - 1} style={{flex: 1}}>
            <img src = {RightCustomIcon} style={{width: "11.67px", height: "11.67px"}}/>
        </IconButton>
        </Box>
    );
    };

    interface newIfield {
        label: string;
        value: string;
        aiflag: boolean;
    }

    const [rowsData, setRowsData] = useState<Itablerow[]>([]);

    const paginatedrows = rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


    interface Itablerow {
        id: string
        fields: newIfield[];
    }

    useEffect(() => {
        axios.get<Itablerow[]>(`${API_BASE_URL}/tablerows`)
        
        .then((response) => {
            setRowsData(response.data.reverse());
        })

        .catch((error) => {
            console.error("Error occured at Table.tsx while fetching data from tablerows: "+ error);
        })
    },[]);


    const [tabsArray,setTabsArray] = useState<string[]>(["All", "AI Generated"]);

    const handleNewView= () => {
        const updatedView = [...tabsArray,newView];
        setTabsArray(updatedView);
        handleAddViewClose();
    };

    return(
        <div className="uploadtables" style={{marginTop: "50px", border: "0.5px solid lightgray", borderRadius: "4px", padding: "10px 20px 30px 20px"}}>
            <div>
                <div>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: "divider",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            minHeight: "50px", // Standard AppBar height
                        }}
                        >
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            variant="scrollable"
                            scrollButtons = "auto"
                            sx={{ fontFamily: "Poppins", minHeight: "48px", marginBottom: "-5px"}} // ensure tabs are not too tall
                        >
                            
                            {tabsArray.map((tab,index) => (
                                <Tab
                            label={tab}
                            sx={{
                                fontWeight: 600,
                                textTransform: "none",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                minHeight: "48px",
                            }}
                            />
                            ))}
                            <IconButton onClick={handleAddViewClick}>
                            <Tab
                            label={<AddIcon />}
                            sx={{ fontWeight: 600, textTransform: "none", minHeight: "48px" }}
                            />
                            </IconButton>
                        </Tabs>

                        <Popover open = {addViewOpen} anchorEl={anchorElAddView} onClose={handleAddViewClose} disableScrollLock anchorOrigin={{vertical: "center", horizontal:"right"}} sx={{boxShadow: "none", marginLeft: "30px", marginTop: "-50px"}}slotProps={{
                            paper: {
                            elevation: 0,
                            sx: {
                                boxShadow: "none",
                            },
                            },
                        }}>
                            <div className="addview-box">
                                <div className="addviewtop">
                                    <p>Add View</p>
                                    <IconButton onClick={handleAddViewClose}><CloseIcon sx = {{color: "black"}} /></IconButton>
                                </div>
                                <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "15px", fontFamily:"Poppins"}}>Enter a new view name</p>
                                <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="AI View"
                                value={newView}
                                onChange={(event) => setNewView(event.target.value)}
                                sx={{
                                    marginBottom: "7px",
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
                                <div className="buttons" style={{padding: "20px 0px 0px 0px"}}>
                                    <Button
                                    onClick={handleAddViewClose}
                                    variant="outlined"
                                    style={{
                                        textTransform: "none", 
                                        fontSize: "16px", 
                                        padding: "10px 20px 10px 20px",
                                        border: "1px solid gray",
                                        color: "#1093FF"
                                        }} 
                                    className="actions">Cancel</Button>
                                    <Button
                                    onClick = {handleNewView}
                                    variant="contained"
                                    style={{
                                        textTransform: "none", 
                                        fontSize: "16px", 
                                        padding: "10px 25px 10px 25px",
                                        backgroundColor: "#1093FF",
                                        boxShadow: "none"
                                        }} 
                                    className="actions">Save</Button>
                                </div>
                            </div>
                        </Popover>

                        <TablePagination
                            component="div"
                            count={rowsData.length}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onPageChange={handlePageChange}
                            // onRowsPerPageChange={handleRowsPerPageChange}
                            rowsPerPageOptions={[]}
                            labelDisplayedRows={() => ""}
                            ActionsComponent={(props) => <CustomPaginationActions {...props} />}
                            sx={{
                                "& .MuiTablePagination-toolbar": {
                                justifyContent: "center", // center the entire thing
                                display: "block",
                                alignItems: "center",
                                marginTop:"15px"
                                },
                            }}
                        />
                    </Box>

                </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="filterandpagin">

                <Button
                variant="outlined"
                onClick={handleFilterClick}
                startIcon={<img src={FilterBlueIcon} style={{width: "24", height: "24"}}/>}
                sx={{
                    borderRadius: '30px',
                    fontWeight: 500,
                    padding: "4px 16px",
                    fontSize: "17px",
                    fontFamily: "Poppins",
                    // marginRight: "15px",
                    marginLeft: "20px",
                    marginTop: "0px",
                    height: "35px",
                    color:"black",
                    border: "0.5px solid lightgray",
                    textTransform: "none",
                    '& .MuiButton-startIcon': {
                    color: '#1976d2',
                    },
                }}
                >
                Filter
                </Button>

                <Popover open={filterOpen} anchorEl={anchorElFilter} onClose={handleFilterClose} disableScrollLock anchorOrigin={{vertical: "center", horizontal:"right"}} sx={{boxShadow: "none", marginLeft: "30px", marginTop: "-50px"}}slotProps={{
                    paper: {
                    elevation: 0,
                    sx: {
                        boxShadow: "none",
                    },
                    },
                }}>
                    <div className = "filter-box">
                        <Box className = "filtertop">
                            <p>Filters</p>
                            <IconButton onClick={handleFilterClose}><CloseIcon sx = {{color: "black"}} /></IconButton>
                        </Box>
                        <div style={{display: 'flex'}}>
                        <div className = "filterleft" style = {{width: "30%",backgroundColor: "#EBEBEB"}}>
                            <Stack>
                                <Box sx={{borderBottom: "1px solid gray"}}>
                                <p style={{fontFamily: "Poppins", fontWeight: 600, fontSize: "15px", padding: "20px 10px 20px 40px"}}>CATEGORIES</p>
                                </Box>
                                {categories.map((category, index) => (
                                    <ButtonBase
                                    key={index}
                                    //   onClick={() => handleClick(category)} // your click logic
                                    sx={{
                                        justifyContent: "flex-start",
                                        width: "100%",
                                        pl: "40px",
                                        py: "20px",
                                    }}
                                    >
                                    <p className="catnames" style={{ margin: 0 }}>{category}</p>
                                    </ButtonBase>
                                ))}
                            </Stack>
                        </div>
                        <div className = "filterright" style={{width: "70%"}}>
                            <div style={{display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "nowrap", alignItems: "center", marginTop: "20px"}}>
                                <div className="searchbar" style={{marginLeft: "20px", maxWidth: "200px"}}>
                                <TextField
                                variant="outlined"
                                placeholder="Search in clause"
                                size="small"
                                sx={{
                                    // width: "100%",
                                    maxWidth: 200,
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    backgroundColor: '#F4F4F4',
                                    '& input': {
                                        fontSize: '14px', // 👈 Increase text size here
                                        marginLeft: "5px",
                                        fontFamily: "Poppins"   
                                    },
                                    '& .MuiInputAdornment-root svg': {
                                        fontSize: '30px', // 👈 Optional: increase icon size
                                        borderRight: "1px solid lightgray",
                                        paddingRight: "10px"
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: "0.25px solid #C4C4C4",
                                    },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                                </div>
                                <Button onClick = {() => {setSubchecked([])}} style={{textTransform: "none", fontFamily: "Poppins", fontWeight: "500", fontSize: "15px", color: "#1093FF", marginRight: "10px"}}>Clear All</Button>
                            </div>
                            <div className = "subcatlist"style={{marginLeft: "20px", marginTop: "8px"}}>
                                <List>
                                    <ListItem dense disablePadding onClick={handleToggle('all')} sx={{ cursor: 'pointer', borderBottom: "0.5px solid #E4E4E4", marginBottom: "4px"}}>
                                        <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <Checkbox
                                            edge="start"
                                            checked={isAllSelected}
                                            // indeterminate={subchecked.length > 0 && !isAllSelected}
                                            tabIndex={-1}
                                            disableRipple
                                            sx={{'& .MuiSvgIcon-root': {
                                                borderRadius: '16px', // or '8px' for more rounding
                                            },
                                            '&.Mui-checked': {
                                            color: '#45464B', // Checked color
                                            },
                                            }}
                                        />
                                        </ListItemIcon>
                                        <ListItemText primary={<p style={{fontSize: "15px", fontFamily: "Poppins", fontWeight: "600",color: "#606060"}}>Select All ({subcategories.length})</p>}></ListItemText>
                                    </ListItem>
                                    {subcategories.map((subcategory) => (
                                        <ListItem
                                        key={subcategory}
                                        dense
                                        disablePadding
                                        onClick={handleToggle(subcategory)}
                                        sx={{ cursor: 'pointer',borderBottom: "0.5px solid #E4E4E4", marginBottom: "4px" }}
                                        >
                                        <ListItemIcon sx={{ minWidth: '30px' }}>
                                            <Checkbox
                                            edge="start"
                                            checked={subchecked.includes(subcategory)}
                                            tabIndex={-1}
                                            disableRipple
                                            sx={{'& .MuiSvgIcon-root': {
                                                borderRadius: '16px', // or '8px' for more rounding
                                            },
                                            '&.Mui-checked': {
                                            color: '#45464B', // Checked color
                                            },
                                            }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={<p style={{fontFamily: "Poppins", color: "#606060", fontSize: "14px"}}>{subcategory}</p>} />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                                
                        </div>

                        </div>
                        <div className="buttons" style={{borderTop: "0.5px solid lightgray", padding: "10px"}}>
                            
                            <Button
                            onClick={handleFilterClose}
                            variant="outlined"
                            style={{
                                textTransform: "none", 
                                fontSize: "16px", 
                                padding: "10px 20px 10px 20px",
                                border: "1px solid gray",
                                color: "#1093FF"
                                }} 
                            className="actions">Cancel</Button>
                            <Button
                            
                            variant="contained"
                            style={{
                                textTransform: "none", 
                                fontSize: "16px", 
                                padding: "10px 25px 10px 25px",
                                backgroundColor: "#1093FF",
                                boxShadow: "none"
                                }} 
                            className="actions">Save</Button>
                        </div>
                    </div>
                </Popover>

                <div style={{display: "flex", gap: "10px", overflowX: "auto", whiteSpace: "nowrap"}}>
                <Chip
                label="Contract Title: Master Service Agreement"    
                deleteIcon={<img src = {CancelCustomIcon} style={{width: "24px", height: "24px"}}/>}
                onDelete={() => {}}
                sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    border: "1px solid #D4D4D4",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    padding: "7px 5px",
                    // marginTop: "18px",
                    // width: "180px"
                }}
                />

                <Chip
                label="Customer Name: Remy Jan"
                deleteIcon={<img src = {CancelCustomIcon} style={{width: "24px", height: "24px"}}/>}
                onDelete={() => {}}
                sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    border: "1px solid #D4D4D4",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    padding: "5px",
                    marginLeft: "7px 5px"
                    // marginTop: "18px",
                    // width: "180px"
                }}
                />
                {/* <IconButton><img src = {CancelCustomIcon}/></IconButton> */}

                <Chip
                label={<div style={{display: "flex", gap: "10px", alignItems: "center"}}><p>Date Range: </p><img src = {DateIcon} style={{width: "13.33px", height: "13.33px"}}/> <p>DD/MM/YYYY - DD/MM/YYYY</p></div>}
                deleteIcon={<img src = {CancelCustomIcon} style={{width: "24px", height: "24px"}}/>}
                onDelete={() => {}}
                sx={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    border: "1px solid #D4D4D4",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    padding: "5px",
                    marginLeft: "7px 5px"
                    // marginTop: "18px",
                    // width: "180px"
                }}
                />  
                </div>

                {/* <div style={{ display: 'flex', gap: '1rem', padding: '20px' ,marginRight: "400px"}}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        dateFormat="dd MMM yyyy"
                        className="custom-datepicker"
                      />
                
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate ?? undefined}
                        placeholderText="End Date"
                        dateFormat="dd MMM yyyy"
                        className="custom-datepicker"
                      />
                </div> */}

            </div>
            <Button style={{textTransform: "none", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", color: "#1093FF"}}>Clear All</Button>
            </div>
            <div className="apply-actions" style={{marginBottom: "23px", display: "flex", alignItems: "center"}}>
                <p className="apply">Apply Action: </p>
                <div className="actionicons" style={{display: "flex", gap: "10px", marginLeft: "10px"}}>
                    {/* <IconButton sx = {{py: 0}}><img src={LabelIcon} style={{width: "24px", height: "24px"}}/></IconButton> */}
                    <LabelAs/>
                    {/* <div style={{borderLeft: "0.5px solid lightgray", display: "flex", alignItems: "center", paddingLeft: "10px"}}><IconButton sx = {{py: 0}}><img src={DeleteCustomIcon} style={{width: "24px", height: "24px"}}/></IconButton></div> */}
                    <DeletePopoverExample/>
                    <div style={{borderLeft: "0.5px solid lightgray", display: "flex", alignItems: "center", paddingLeft: "10px"}}><IconButton sx = {{py: 0}}><img src={ExportNewIcon} style={{width: "19px", height: "19px"}}/></IconButton></div>
                    <div style={{borderLeft: "0.5px solid lightgray", display: "flex", alignItems: "center", paddingLeft: "10px"}}><IconButton sx = {{py: 0}}><img src={ChatBotIcon} style={{width: "24px", height: "24px"}}/></IconButton></div>
                </div>
                
            </div>
            <TableContainer>
                <Table sx={{ minWidth: 500 }}>
                    <TableHead style={{ backgroundColor: "#F3F4F9" }}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < rows.length}
                                    checked={selected.length > 0 && selected.length === rows.length}
                                    onChange={handleAllSelect}
                                />
                            </TableCell>
                            <TableCell></TableCell>
                            {/* <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CONTACT NO</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CUSTOMER NAME</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CONTRACT TITLE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>START DATE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>BATCH GENEREATED</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>AUTO RENEWAL TERM</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>PAYMENT TERM</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell> */}
                            {/* <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>VENDOR CODE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell> */}
                            {/* <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>TAGS</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell> */}
                            {rowsData.length > 0 &&
                            rowsData[0].fields.map((field,index) => {
                                if(field.label !== "Web Site" && field.label !== "Address" && field.label !== "Phone") {
                                return (
                                <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>{field.label.toUpperCase()}</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                                );
                            }
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedrows.map((row, index) => {
                            const rowIndex = page * rowsPerPage + index;
                            const isItemSelected = isSelected(rowIndex);
                            return (
                                <TableRow
                                    key={index}
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    selected={isItemSelected}
                                    onClick={() => handleClick(rowIndex)}
                                >
                                    
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                            onChange={() => handleClick(rowIndex)}
                                        />
                                    </TableCell>
                                    <TableCell style={{padding: "0px"}}><IconButton><img src = {ExpandDownIcon} style={{width: "15px", height: "15px"}}/></IconButton></TableCell>
                                    
                                    <TableCell style={{ color: "blue", fontFamily: "Poppins"}}>
                                        <CellWithFlag flag={row.fields[0].aiflag}>{row.fields[0].value}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.fields[1].aiflag}>{row.fields[1].value}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.fields[2].aiflag}>{row.fields[2].value}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.fields[3].aiflag}>{row.fields[3].value}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.fields[4].aiflag}>
                                            <BatchFormat label={row.fields[4].value} />
                                        </CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.fields[5].aiflag}>
                                            <QuantityReceivedChip status={row.fields[5].value}/>
                                        </CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500"}}>
                                        <CellWithFlag flag={row.fields[6].aiflag}><p style={{maxWidth: "20ch", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{row.fields[6].value}</p></CellWithFlag>
                                    </TableCell>
                                    {/* <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.vendorCode}>{row.vendorCode}</CellWithFlag>
                                    </TableCell> */}
                                    {/* <TableCell style={{fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.tags}>
                                            <TagsFormat label={row.tags} />
                                        </CellWithFlag>
                                    </TableCell> */}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            </div>
    );
}

export default Tabletry;