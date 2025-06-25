import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import CustomBreadCrumbs from "client/src/components/CustomBreadCrumbs/CustomBreadCrumbs";
import "./ContractScan.scss";
import UploadBigIcon from "../../assets/Upload.svg";
import {API_BASE_URL} from "../../../api";
import axios from "axios";
import DeleteBlueIcon from "../../assets/TrashBlue.svg";
import ImportBlueIcon from "../../assets/ImportBlue.svg";
import DuplicateBlueIcon from "../../assets/DuplicateBlue.svg";
import ExportDataBlueIcon from "../../assets/ExportDataBlue.svg";
import ResetBlueIcon from "../../assets/ResetBlue.svg";
import OutSourceIcon from "../../assets/OutSource.svg";
import ZoomInIcon from "../../assets/ZoomIn.svg";
import ZoomOutIcon from "../../assets/ZoomOut.svg";
import LoadingAIICon from "../../assets/LoadingAI.svg"
import ChatBotPop from "client/src/components/ChatBotPop/ChatBotPop";
import AlertIcon from "../../assets/Alert.svg";
import { useNavigate, useLocation } from "react-router-dom";

function ContractScan() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const file = location.state?.selectedfile
        if(file) {
            setFile(file);
            setPreviewURL(URL.createObjectURL(file));
            console.log("file name: "+file?.name);
        }
    },[location.state]);

    const [formData, setFormData] = useState<newIfield[]>([]);
    const [formLoading, setFormLoading] = useState<Boolean>(true);
    const [showHighlights, setShowHighlights] = useState<Boolean>(false);
    
    interface Ifield {
        label: string;
        value: string;
        aifield: boolean;
    }

    interface Isection {
        header: string;
        fields: Ifield[];
    }

    interface newIfield {
        label: string
        value: string
        aiflag: boolean
    }

    const [fieldData,setFieldData] = useState<string[]>([""]);

    const handleChange = (index: number, value: string) => {
        const updatedFields = [...fieldData];
        updatedFields[index] = value;
        setFieldData(updatedFields);

        const updatedFormData = formData;
        updatedFormData[index].value = value;
        setFormData(updatedFormData);
    }

    const [initFiledVals, setInitFieldVals] = useState<string[]>([""]);

    useEffect(() => {
        axios.get<newIfield[]>(`${API_BASE_URL}/formsections`)
        
        .then((response) => {
            setFormData(response.data);
            setFieldData(response.data.map(field => field.value));
            setInitFieldVals(response.data.map(field => field.value));
            setFormLoading(false);
        })

        .catch((error) => {
            console.error("Error Occured at fetching: " + error);
            setFormLoading(false);
        })
    },[]);

    const changedIndexes1 = fieldData.map((value: string, index: number) =>
        value !== initFiledVals[index] ? index : null
    ).filter((index): index is number => index !== null);

    const changedIndexes = formData.map((field: newIfield, index: number) => field.value !== initFiledVals[index] ? index : null
    ).filter((index): index is number => index !== null);

    const fileInputRef = useRef<HTMLInputElement|null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedfile = event.target.files?.[0];

        if(selectedfile) {
            const isValidType = selectedfile.type.startsWith("image/") || selectedfile.type === "application/pdf";
            if(!isValidType) {
                alert("Upload a valid file type (img or pdf)");
                return;
            }
            setFile(selectedfile);
            setPreviewURL(URL.createObjectURL(selectedfile));
        }
    };

    const handleUploadIconClick = () => {
        fileInputRef.current?.click();
    }

    const [AILoading, setAILoading] = useState<Boolean>(false);
    const handleAILoading = () => {
        if(AILoading) {
            setAILoading(false);
        } else {
            setAILoading(true);
        }
    }


    const handleReset = () => {
        setFieldData([""]);
        const newFormData = formData.map((field: newIfield) => ({
            ...field,
            value: "",
            }));
        setFormData(newFormData);
        changedIndexes.length = formData.length; 
    }

    const saveTableRows = async () => {
        try {
            const newRow = {fields: formData};
            const response = await axios.post(`${API_BASE_URL}/tablerows`,newRow);
            console.log("New Row updated to tablerows successfully: "+ response.data);
        }
        catch(error) {
            console.log("Error Occured during saving a row to tablerows present at db.json: " + error);
        }
        navigate("/dashboard/all-contracts");
    };

    return(
        <Box sx={{minHeight: "100vh"}} className = "fullcontract">
            <div style={{padding: "30px 80px 0px 80px"}}>
                <CustomBreadCrumbs replacetext="Contract Scan" tonav="contract-scan"/>
                <p className="contracttext">Contract Scan</p>
                <div className="fileandforms">
                    <div className="file" style={{display: (!file) ? ("flex"): ("block")}}>
                        {!file && (
                        <div className="upl">
                            <IconButton onClick={handleUploadIconClick}><img src = {UploadBigIcon} style={{width: "85px", height: "85px"}}/></IconButton>
                            <p className="upltext">Upload Invoice</p>
                        </div>
                        )} 
                        <input type="file"
                        ref = {fileInputRef}
                        onChange={handleFileChange}
                        style={{display: "none"}}
                        accept="image/*,application/pdf"
                        />
                        
                        {file?.type.startsWith("image/") && previewURL && (
                            <img src = {previewURL} style={{width: "100%", height: "95%"}}/>
                        )}

                        {file?.type === "application/pdf" && previewURL && (
                            <iframe src = {previewURL} style={{width: "100%", height: "100%"}}/>
                        )}

                        {file && 
                        <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", marginTop: "-10px"}}>
                            <ChatBotPop/>
                        <div className="zoomactions">
                            <IconButton><img src = {ZoomInIcon} style={{width: "24px", height: "24px", borderRight: "1px solid lightgray", paddingRight: "20px"}}/></IconButton>
                            <IconButton><img src = {ZoomOutIcon} style={{width: "24px", height: "24px"}}/></IconButton>
                        </div>
                        </div>
                        }
                    </div>
                    {(!AILoading) ? (
                    <div className="forms">

                        <div className="formtop">
                            <p className="edittext">Edit Result</p>
                            <div className="edittopactions">
                                <IconButton><img src = {DeleteBlueIcon} style={{width: "20px", height: "20px"}}/></IconButton>
                                <IconButton><img src = {ImportBlueIcon} style={{width: "20px", height: "20px"}}/></IconButton>
                                <IconButton><img src = {DuplicateBlueIcon} style={{width: "20px", height: "20px"}}/></IconButton>
                                <IconButton><img src = {ExportDataBlueIcon} style={{width: "20px", height: "20px"}}/></IconButton>
                                
                                <Button 
                                variant="outlined" 
                                onClick={handleReset}
                                startIcon = {<img src = {ResetBlueIcon} style={{width: "18px", height: "18px", paddingLeft: "10px"}}/>}
                                style={{textTransform: "none", border: "1px solid #72777F"}}>
                                    <p className="resettext">Reset</p>
                                </Button>
                            </div>
                        </div>

                        <div className="formdata">
                        {/* {formData.map((section,index) => (
                            <div key = {index}>
                                <p className="sectionheader" style={{marginTop: (index === 0) ? ("auto"): ("24px")}}>{section.header}</p>
                                <div className="fields" >
                                {section.fields.map((field,index) => (
                                    
                                    <div>                                        
                                        <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "5px", fontFamily: "Poppins"}}>{field.label}</p>
                                        <TextField
                                        variant="outlined"
                                        fullWidth
                                        // placeholder="AI View"
                                        value={field.value}
                                        // onChange={(event) => setNewLabel(event.target.value)}

                                        InputProps={{
                                                ...(field.aifield && {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    <img
                                                        src={OutSourceIcon}
                                                        alt="icon"
                                                        style={{ width: "17px", height: "17px" }}
                                                    />
                                                    </InputAdornment>
                                                ),
                                                }),
                                            }}
                                            inputProps={{
                                            style: {
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: "20ch"
                                            }
                                        }}
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
                                    </div>
                                ))}
                                </div>
                            </div>
                        ))} */}

                        {changedIndexes.length !== 0 && 
                        <div className="viewedit">
                            <img src= {AlertIcon} style = {{width: "16px", height: "16px"}} />
                            <div style={{display: "flex", gap: "16px", alignItems: "center"}}>
                            <p className="outof">{changedIndexes.length} out of {formData.length} fields has been edited</p>
                            {/* <p className="view" style={{cursor: "pointer"}}>View Edits</p> */}
                            <Button 
                            variant="text"
                            onClick={() => setShowHighlights(prev => !prev)}
                            style={{color: "#1093FF", fontFamily: "Poppins", fontSize: "12px", fontWeight: "500", textTransform: "none"}}
                            >{(!showHighlights) ? (<p>View Edits</p>) : (<p>Hide Edits</p>)}</Button>
                            </div>
                        </div>
                        }
                        <div className="fields" >
                                {formData.map((field,index) => (
                                    
                                    <div>                                        
                                        <p style={{margin: 0, fontSize: "14px", color: "#606060", marginTop: "5px", fontFamily: "Poppins"}}>{field.label}</p>
                                        <TextField
                                        variant="outlined"
                                        key={index}
                                        fullWidth
                                        // placeholder="AI View"
                                        value={fieldData[index] || ""}
                                        // onChange={(event) => setNewLabel(event.target.value)}
                                        onChange={(e) => handleChange(index,e.target.value)}
                                        InputProps={{
                                                ...(field.aiflag && {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                    <img
                                                        src={OutSourceIcon}
                                                        alt="icon"
                                                        style={{ width: "17px", height: "17px" }}
                                                    />
                                                    </InputAdornment>
                                                ),
                                                }),
                                            }}
                                            inputProps={{
                                            style: {
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: "20ch"
                                            }
                                        }}
                                        sx={{
                                            marginBottom: "7px",
                                            backgroundColor: (showHighlights && changedIndexes.includes(index)) ? "#EBF1FF": "inherit",
                                            '& .MuiInputBase-root': {
                                            borderRadius: '4px',
                                            fontSize: '16px',
                                            fontFamily: 'Poppins, sans-serif',
                                            '& fieldset': {
                                                borderWidth: '0.5px',
                                                // borderColor: '#C4C4C4',
                                                borderColor:  (showHighlights && changedIndexes.includes(index)) ? "#0F93FF": "#C4C4C4",
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#999',
                                            },
                                            // '&.Mui-focused fieldset': {
                                            //     borderColor: '#000',
                                            // },   
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
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="formbottom">
                            <div className="buttons" style={{padding: "0px 30px 12px 0px", marginBottom: "-20px"}}>
                                <Button
                                // onClick={handleClose}
                                variant="outlined"
                                style={{
                                    textTransform: "none", 
                                    fontSize: "16px", 
                                    padding: "10px 20px 10px 20px",
                                    border: "1px solid gray",
                                    color: "#1093FF"
                                    }} 
                                className="actions">Review Later</Button>
                                <Button
                                variant="contained"
                                // onClick={handleOpenUpl}
                                onClick={saveTableRows}
                                style={{
                                    textTransform: "none", 
                                    fontSize: "16px", 
                                    padding: "10px 25px 10px 25px",
                                    backgroundColor: "#1093FF",
                                    boxShadow: "none"
                                    }} 
                                className="actions">Reviewed</Button>
                            </div>
                        </div>

                    </div>
                    ):
                    <div style={{flex: 1, padding: "35px", borderLeft: "1px solid #9A9A9A80"}}>
                        <div style={{display: "flex", alignItems: "center", gap:"15px"}}>
                        <img src = {LoadingAIICon} style={{width: "46px", height: "46px"}}/>
                        <p style={{fontFamily: "Poppins", fontSize: "14px", fontWeight: "500"}}>AI is Identifying Fields</p>
                        </div>
                    </div>
                    }
                </div>
                <Button 
                onClick={handleAILoading}
                >Loading...</Button>
            </div>
        </Box>  
    );
}

export default ContractScan