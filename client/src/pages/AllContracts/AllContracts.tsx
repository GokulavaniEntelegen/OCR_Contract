import React from 'react';
import './AllContracts.scss';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import HideWidgetsIcon from '../../assets/HideWidgetsIcon.svg';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/Upload';
import CustomCharts from '../../components/Charts/Charts';
import Tabletry from 'client/src/components/Table/Tables';
import ImportContractPop from 'client/src/components/ImportContractPop/importcontractpop';
import UploadCustomIcon from '../../assets/UploadCustom.svg';
import ShowWidgetsIcon from '../../assets/ShowWidgets.svg';
import UploadContract from '../Dashboard/UploadContract';

function AllContracts() {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    return (
        <div style={{ overflowY: 'auto', paddingBottom: '30px' }}>
            <Box sx={{ width: '100%', overflowY: 'auto' }}>
                <div style={{ padding: '30px 30px 0px 30px' }}>
                    <div
                        className="contract-actions"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <p className="all">All Contracts</p>

                        <div className="options">
                            <Button
                                variant="text"
                                onClick={handleShow}
                                startIcon={
                                    <img
                                        src={show ? ShowWidgetsIcon : HideWidgetsIcon}
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                }
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    color: '#1093FF',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                }}
                            >
                                {show ? <p>Show Widgets</p> : <p>Hide Widgets</p>}
                            </Button>
                            {/* <Button
                            variant="text"
                            startIcon = {<CloudDownloadIcon/>}
                            sx={{textTransform: "none", fontSize: "16px", color: "#1093FF", fontFamily: "Poppins", fontWeight: '500'}}
                            >
                                Import Details
                        </Button> */}
                            <ImportContractPop fromtext="allcontracts" />

                            <Button
                                onClick={() => {
                                    setShowModal(true);
                                }}
                                variant="contained"
                                startIcon={
                                    <img
                                        src={UploadCustomIcon}
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                }
                                style={{
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    borderRadius: '4px',
                                    backgroundColor: '#1093FF',
                                    fontSize: '16px',
                                    boxShadow: 'none',
                                }}
                            >
                                Upload Contracts
                            </Button>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '30px' }}>
                        <CustomCharts show={show} />
                    </div>
                    <div className="contracttable" style={{ marginTop: '60px' }}>
                        <Tabletry show={show} />
                    </div>
                    <UploadContract showModal={showModal} setShowModal={setShowModal} />
                </div>
            </Box>
        </div>
    );
}

export default AllContracts;
