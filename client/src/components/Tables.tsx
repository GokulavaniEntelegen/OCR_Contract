import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Chip, Button ,Box, IconButton, Tab, Tabs} from "@mui/material";
import React, { useState } from "react";
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

function Tabletry() {
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
                    {status}
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

        return <span>{status}</span>;
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

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

    
    const [tab, setTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
    };

    return(
        <div className="uploadtables" style={{marginTop: "50px", border: "0.5px solid lightgray", borderRadius: "4px", padding: "10px 20px 0 20px"}}>
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
                            sx={{ fontFamily: "Poppins", minHeight: "48px" }} // ensure tabs are not too tall
                        >
                            <Tab
                            label="All"
                            sx={{
                                fontWeight: 600,
                                textTransform: "none",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                minHeight: "48px",
                            }}
                            />
                            <Tab
                            label="AI Generated"
                            sx={{
                                fontWeight: 600,
                                textTransform: "none",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                minHeight: "48px",
                            }}
                            />
                            <Tab
                            label={<AddIcon />}
                            sx={{ fontWeight: 600, textTransform: "none", minHeight: "48px" }}
                            />
                        </Tabs>

                        <TablePagination
                            component="div"
                            count={rows.length}
                            page={page}
                            rowsPerPage={8}
                            onPageChange={handlePageChange}
                            // onRowsPerPageChange={handleRowsPerPageChange}
                            rowsPerPageOptions={[]}
                            sx={{
                            mt: "0px",
                            "& .MuiTablePagination-toolbar": {
                                minHeight: "48px", // match tab height
                                alignItems: "center",
                            },
                            }}
                        />
                    </Box>
                    
                </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="filterandpagin">
                <Button
                variant="outlined"
                startIcon={<img src={Filter_BlackIcon} style={{width: "24", height: "24"}}/>}
                sx={{
                    borderRadius: '30px',
                    fontWeight: 500,
                    padding: "4px 16px",
                    fontSize: "17px",
                    fontFamily: "Poppins",
                    marginRight: "15px",
                    marginLeft: "20px",
                    marginTop: "21px",
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

                <TextField
                    style={{ width:"180px", marginTop: "18px" }}
                    label="Customer Name"
                    size="small"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(event) => setSeacrchQuery(event.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "50px"} }}
                />

                <div style={{ display: 'flex', gap: '1rem', padding: '20px' ,marginRight: "400px"}}>
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
                </div>
                
            </div>
            <Button style={{textTransform: "none", fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", color: "#1093FF"}}>Clear All</Button>
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
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CONTACT NO</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CUSTOMER NAME</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>CONTRACT TITLE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>START DATE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>BATCH GENEREATED</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>AUTO RENEWAL TERM</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            {/* <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>VENDOR CODE</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell> */}
                            <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>PAYMENT TERM</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell>
                            {/* <TableCell><strong style={{fontFamily: "Poppins", color: "#45464B"}}>TAGS</strong><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></TableCell> */}
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
                                    <TableCell style={{padding: "0px"}}><IconButton><ArrowCircleDownIcon/></IconButton></TableCell>
                                    <TableCell style={{ color: "blue", fontFamily: "Poppins"}}>
                                        <CellWithFlag flag={row.flags.contact}>{row.contact}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.name}>{row.name}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.address}>{row.address}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.startDate}>{row.startDate}</CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.batchGenerated}>
                                            <BatchFormat label={row.batchGenerated} />
                                        </CellWithFlag>
                                    </TableCell>
                                    <TableCell style={{fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.quantityReceive}>
                                            <QuantityReceivedChip status={row.quantityReceive} />
                                        </CellWithFlag>
                                    </TableCell>
                                    {/* <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500" }}>
                                        <CellWithFlag flag={row.flags.vendorCode}>{row.vendorCode}</CellWithFlag>
                                    </TableCell> */}
                                    <TableCell style={{ color: "#45464B", fontFamily: "Poppins", fontWeight: "500", whiteSpace: "no", wordBreak: "break-word", maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis"}}>
                                        <CellWithFlag flag={row.flags.billClause}>{row.billClause}</CellWithFlag>
                                    </TableCell>
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