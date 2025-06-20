import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import CustomBreadCrumbs from "client/src/components/CustomBreadCrumbs";
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

function ContractScan() {

    const [formData, setFormData] = useState<Isection[]>([]);
    const [formLoading, setFormLoading] = useState<Boolean>(true);
    
    interface Ifield {
        label: string;
        value: string;
        aifield: boolean;
    }

    interface Isection {
        header: string;
        fields: Ifield[];
    }

    useEffect(() => {
        axios.get<Isection[]>(`${API_BASE_URL}/formsections`)
        
        .then((response) => {
            setFormData(response.data);
            setFormLoading(false);
        })

        .catch((error) => {
            console.error("Error Occured at fetching: " + error);
            setFormLoading(false);
        })
    },[]);

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

    return(
        <Box sx={{minHeight: "100vh"}} className = "fullcontract">
            <div style={{padding: "30px 80px 0px 80px"}}>
                <CustomBreadCrumbs replacetext="Contract Scan"/>
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
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
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
                                startIcon = {<img src = {ResetBlueIcon} style={{width: "18px", height: "18px", paddingLeft: "10px"}}/>}
                                style={{textTransform: "none", border: "1px solid #72777F"}}>
                                    <p className="resettext">Reset</p>
                                </Button>
                            </div>
                        </div>
                        <div className="formdata">
                        {formData.map((section,index) => (
                            <div key = {index}>
                                <p className="sectionheader" style={{marginTop: (index === 0) ? ("auto"): ("24px")}}>{section.header}</p>
                                <div className="fields">
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
                        ))}
                        </div>

                        <div className="formbottom">
                            <div className="buttons" style={{padding: "0px 30px 2px 0px", marginBottom: "-20px"}}>
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