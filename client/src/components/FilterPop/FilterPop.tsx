import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import FilterBlueIcon from '../../assets/FilterBlue.svg';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Chip,
    Box,
    IconButton,
    Tab,
    Tabs,
    Popover,
    Stack,
    ButtonBase,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    TablePaginationProps,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useContractContext } from 'client/src/context/AuthContext';

const FilterPop: React.FC = () => {
    const [anchorElFilter, setAnchorElFilter] = useState<HTMLElement | null>(null);

    const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElFilter(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorElFilter(null);
    };

    const filterOpen = Boolean(anchorElFilter);

    const [categories, setCategories] = useState<string[]>([]);

    const subcategories: string[] = [
        'IT Services Contracts',
        'Sub-Contract 1',
        'SLA 1',
        'Master service level Agreement 1',
        'Sub-Contract 2',
        'SLA 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
        'Master service level Agreement 2',
    ];



    const [subchecked, setSubchecked] = useState<string[]>([]);

    const handleToggle = (value: string) => () => {
        if (value === 'all') {
            if (subchecked.length === ((currentSubCat) ? currentSubCat.length : "")) {
                setSubchecked([]);
            } else {
                if(currentSubCat) {
                    setSubchecked([...currentSubCat]);
                }
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

    
    const [anchorElAddView, setAnchorElAddView] = useState<HTMLElement | null>(null);
    const [allSubCat, setAllSubCat] = useState<string[][]>();
    const { jsonData, setJsonData } = useContractContext();
    const [currentSubCatIndex, setCurrentSubCatIndex] =useState<number>(0);
    const [currentSubCat, setCurrentSubCat] = useState<string[]>();
    const isAllSelected = subchecked.length === ((currentSubCat) ? currentSubCat.length : "");

useEffect(() => {
    const updCategories = jsonData.formsections.map((field) => field.label);
    setCategories(updCategories);
}, [jsonData]);

useEffect(() => {
    if (!categories.length) return;

    const allsubcat: string[][] = categories.map((_, colIndex) => {
        const values = jsonData.tablerows.map(row => row.fields[colIndex]?.value);
        const uniqueValues = Array.from(new Set(values.filter(Boolean)));
        return uniqueValues;
    });

    setAllSubCat(allsubcat);
    setCurrentSubCat(allsubcat[0]);
}, [categories, jsonData]);


    return (
        <>
            <Button
                variant="outlined"
                onClick={handleFilterClick}
                startIcon={<img src={FilterBlueIcon} style={{ width: '24', height: '24' }} />}
                sx={{
                    borderRadius: '30px',
                    fontWeight: 500,
                    padding: '4px 16px',
                    fontSize: '17px',
                    fontFamily: 'Poppins',
                    // marginRight: "15px",
                    marginLeft: '20px',
                    marginTop: '0px',
                    height: '35px',
                    color: 'black',
                    border: '0.5px solid lightgray',
                    textTransform: 'none',
                    '& .MuiButton-startIcon': {
                        color: '#1976d2',
                    },
                }}
            >
                Filter
            </Button>

            <Popover
                open={filterOpen}
                anchorEl={anchorElFilter}
                onClose={handleFilterClose}
                disableScrollLock
                anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                sx={{ boxShadow: 'none', marginLeft: '30px', marginTop: '-50px' }}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            boxShadow: 'none',
                        },
                    },
                }}
            >
                <div className="filter-box">
                    <Box className="filtertop">
                        <p>Filters</p>
                        <IconButton onClick={handleFilterClose}>
                            <CloseIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Box>
                    <div style={{ display: 'flex' }}>
                        <div
                            className="filterleft"
                            style={{ width: '30%', backgroundColor: '#EBEBEB' }}
                        >
                            <Stack>
                                <Box
                                    sx={{
                                        borderBottom: '1px solid gray',
                                        flexShrink: 0,
                                        scrollbarWidth: 'none',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            fontSize: '15px',
                                            padding: '20px 10px 20px 40px',
                                        }}
                                    >
                                        CATEGORIES
                                    </p>
                                </Box>
                                <Box
                                    style={{
                                        maxHeight: '60vh',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                    }}
                                >
                                    {categories.map((category, index) => (
                                        <ButtonBase
                                            key={index}
                                            onClick={() => {
                                            const subCat = allSubCat?.[index];
                                            if (subCat) setCurrentSubCat(subCat);
                                            console.log("Clicked: " + category);
                                            }}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                width: '100%',
                                                pl: '40px',
                                                py: '20px',
                                            }}
                                        >
                                            <p className="catnames" style={{ margin: 0 }}>
                                                {category}
                                            </p>
                                        </ButtonBase>
                                    ))}
                                </Box>
                            </Stack>
                        </div>
                        <div className="filterright" style={{ flex: 1, flexShrink: 0 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    flexWrap: 'nowrap',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    flexShrink: 0,
                                }}
                            >
                                <div
                                    className="searchbar"
                                    style={{ marginLeft: '20px', maxWidth: '200px', flexShrink: 0 }}
                                >
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
                                                    marginLeft: '5px',
                                                    fontFamily: 'Poppins',
                                                },
                                                '& .MuiInputAdornment-root svg': {
                                                    fontSize: '30px', // 👈 Optional: increase icon size
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
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <Button
                                    onClick={() => {
                                        setSubchecked([]);
                                    }}
                                    style={{
                                        textTransform: 'none',
                                        fontFamily: 'Poppins',
                                        fontWeight: '500',
                                        fontSize: '15px',
                                        color: '#1093FF',
                                        marginRight: '10px',
                                    }}
                                >
                                    Clear All
                                </Button>
                            </div>
                            <div
                                className="subcatlist"
                                style={{ marginLeft: '20px', marginTop: '8px' }}
                            >
                                <List>
                                    <ListItem
                                        dense
                                        disablePadding
                                        onClick={handleToggle('all')}
                                        sx={{
                                            cursor: 'pointer',
                                            borderBottom: '0.5px solid #E4E4E4',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: '30px' }}>
                                            <Checkbox
                                                edge="start"
                                                checked={isAllSelected}
                                                // indeterminate={subchecked.length > 0 && !isAllSelected}
                                                tabIndex={-1}
                                                disableRipple
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        borderRadius: '16px', // or '8px' for more rounding
                                                    },
                                                    '&.Mui-checked': {
                                                        color: '#45464B', // Checked color
                                                    },
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <p
                                                    style={{
                                                        fontSize: '15px',
                                                        fontFamily: 'Poppins',
                                                        fontWeight: '600',
                                                        color: '#606060',
                                                    }}
                                                >
                                                    Select All ({currentSubCat && currentSubCat.length})
                                                </p>
                                            }
                                        ></ListItemText>
                                    </ListItem>
                                    <div
                                        style={{
                                            maxHeight: '60vh',
                                            overflowY: 'auto',
                                            scrollbarWidth: 'none',
                                        }}
                                    >
                                        {currentSubCat && currentSubCat.map(subcategory => (
                                            <ListItem
                                                key={subcategory}
                                                dense
                                                disablePadding
                                                onClick={handleToggle(subcategory)}
                                                sx={{
                                                    cursor: 'pointer',
                                                    borderBottom: '0.5px solid #E4E4E4',
                                                    marginBottom: '4px',
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={subchecked.includes(subcategory)}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        sx={{
                                                            '& .MuiSvgIcon-root': {
                                                                borderRadius: '16px', // or '8px' for more rounding
                                                            },
                                                            '&.Mui-checked': {
                                                                color: '#45464B', // Checked color
                                                            },
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <p
                                                            style={{
                                                                fontFamily: 'Poppins',
                                                                color: '#606060',
                                                                fontSize: '14px',
                                                            }}
                                                        >
                                                            {subcategory}
                                                        </p>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </div>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div
                        className="buttons"
                        style={{
                            borderTop: '0.5px solid lightgray',
                            padding: '10px',
                            flexShrink: 0,
                        }}
                    >
                        <Button
                            onClick={handleFilterClose}
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
        </>
    );
};

export default FilterPop;
