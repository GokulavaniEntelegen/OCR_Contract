import React from "react";
import { Box } from "@mui/material";
import CustomBreadCrumbs from "client/src/components/CustomBreadCrumbs";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./ActivityHistory.scss";

interface IData {
  contractno: number,
  event: string,
  when: string,
  who: string,  
}

function createData(
  contractno: number,
  event: string,
  when: string,
  who: string,
): IData {
  return { contractno, event, when, who };
}

let rows: IData[] = [];

for(let i =0;i<50;i++) {
    rows.push(createData(1234567890, "Changed", "4m ago", "Jhon Dar"))
}

function ActivityHistory() {
    return(
        <div>
            <Box sx={{width: "100%",minHeight: "100vh" }}>
                <div style={{padding: "29px 30px 0px 27px"}}>

                    <CustomBreadCrumbs replacetext="Activity History" tonav="activity-history"/>
                    
                    <p style={{fontFamily: "Poppins", fontWeight: "500", fontSize: "24px", color:"#303030", paddingTop:"4px", paddingLeft: "16px"}}>Activity History</p>

                    <div className= "table" style={{padding: "16px"}}>
                        <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{bgcolor: "#F3F4F9"}}>
                            <TableRow>
                                <TableCell sx={{ width: "25%", py:"8px" }}><div style={{display: "flex", alignItems: "center"}}><p className="tablewords">CONTRACT NO</p><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></div></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><div style={{display: "flex", alignItems: "center"}}><p className="tablewords">EVENT</p><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></div></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><div style={{display: "flex", alignItems: "center"}}><p className="tablewords">WHEN</p><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></div></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><div style={{display: "flex", alignItems: "center"}}><p className="tablewords">WHO</p><UnfoldMoreIcon sx = {{verticalAlign: "middle", marginLeft: "4px", fontSize: "small"}}/></div></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.contractno}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell sx={{ width: "25%", py:"8px" }}><p className="tablewords" style={{color:"#2B80EC"}}>{row.contractno}</p></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><p className="tablewords">{row.event}</p></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><p className="tablewords">{row.when}</p></TableCell>
                                <TableCell sx={{ width: "25%", py:"8px" }}><p className="tablewords">{row.who}</p></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                </div>   
            </Box>
        </div>
    );
}

export default ActivityHistory