import React from "react";
import './AllContracts.scss';
import { Box, Button } from "@mui/material";

import HideWidgetsIcon from "../../assets/HideWidgetsIcon.jpg"
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/Upload';
import CustomCharts from "client/src/components/Charts";

function AllContracts() {
    return(
        <div>
            <Box sx={{width: "100%",minHeight: "100vh" }}>
                <div style={{padding: "30px 30px 0px 30px"}}>
                    
                    <div className="contract-actions" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    
                    <p className="all">All Contracts</p>

                    <div className="options">
                        <Button
                            variant="text"
                            startIcon = {<AddIcon/>}
                            sx={{textTransform: "none", fontSize: "16px", color: "#1093FF", fontFamily: "Poppins", fontWeight: '500'}}
                            >
                                Hide Widgets
                        </Button>
                        <Button
                            variant="text"
                            startIcon = {<CloudDownloadIcon/>}
                            sx={{textTransform: "none", fontSize: "16px", color: "#1093FF", fontFamily: "Poppins", fontWeight: '500'}}
                            >
                                Import Details
                        </Button>

                        <Button
                            // onClick={}
                            variant="contained"
                            startIcon = {<UploadIcon/>}
                            style={{
                                textTransform: "none", 
                                fontFamily: "Poppins",
                                borderRadius: "4px",
                                backgroundColor: "#1093FF",
                                fontSize: "16px",
                                boxShadow: "none",
                                }} 
                            >Upload Contracts
                        </Button>
                    </div>

                    </div>

                    <div style={{width: "100%", marginTop: "60px"}}>
                        <CustomCharts/>
                    </div>

                </div>
            </Box>
        </div>
    );
}

export default AllContracts;