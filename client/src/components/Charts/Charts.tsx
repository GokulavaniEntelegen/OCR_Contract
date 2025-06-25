import React, { useState } from "react";
import { Button, Chip, CssBaseline, ThemeProvider, createTheme, Box, Typography, Stack, IconButton, Popover } from "@mui/material";
import '@fontsource/roboto';
import UploadIcon from "@mui/icons-material/Upload";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter_BlackIcon from "../../assets/Filter_Black.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  // PieChart, 
  Pie, Cell
} from 'recharts';
import ChartsMenu from "./ChartsMenu";
import "./Charts.scss";
import { PieChart } from '@mui/x-charts';

const data = [
  { month: 'May', renewable: 20, nonrenewable: 10 },
  { month: 'Jun', renewable: 40, nonrenewable: 25 },
  { month: 'Jul', renewable: 10, nonrenewable: 20 },
  { month: 'Aug', renewable: 10, nonrenewable: 30 },
];

const data2 = [
  { month: 'May', consumables: 10 },
  { month: 'Jun', consumables: 25 },
  { month: 'Jul', consumables: 20 },
  { month: 'Aug', consumables: 30 },
];

const data3 = [
  { name: '3 Rejected', value: 100, color: '#0f63fe', label: "a" },
  { name: '3 Rejected', value: 35, color: '#16dacc', label: "b" },
  { name: '3 Rejected', value: 25, color: '#fbb040', label: "c" },
];


const data31 = [
  { id: 0, value: 45, label: 'Apple', color: '#FF6384' },
  { id: 1, value: 25, label: 'Samsung', color: '#36A2EB' },
  { id: 2, value: 30, label: 'OnePlus', color: '#FFCE56' },
];
const CustomCharts: React.FC<{ show: boolean }> = ({show}) => {

  const [chartName1, setChartName1] = useState<string>("No. Of. Auto Renewal Contracts");
  const [chartName2, setChartName2] = useState<string>("No. Of. Contracts Expiring");
  const [chartName3, setChartName3] = useState<string>("No. Of. Contracts in Payment Terms");

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial',
    },
  });

  const handleRename1 = (newname1:string) => {
    if(newname1 == "") {return}
    setChartName1(newname1)
  }

  const handleRename2 = (newname2:string) => {
    if(newname2 == "") {return}
    setChartName2(newname2)
  }

  const handleRename3 = (newname3:string) => {
    if(newname3 == "") {return}
    setChartName3(newname3)
  }

  return (
    !show && (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{gap: "20px", marginTop: "20px", width: "100%" }} className="threeCharts">
        
        {/* Chart 1 */}
        <Box sx={{ flex: 1, height: "280px", backgroundColor: "#EAF9FF", borderRadius: "8px", border: "0.5px solid lightgray", minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 5, mb: "13px"}}>
            <Box sx={{ mr: "auto", display: "flex", gap: 2, alignItems: "center"}}>
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: "20ch"}}>{chartName1}</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
            <ChartsMenu handleNameChange={handleRename1}/>
          </Box>
          <ResponsiveContainer width="100%" height="80%" style={{marginLeft: "-30px"}}>
            <BarChart data={data} margin={{ right: 20, left: 20, bottom: 5 }} barSize={20}>
              <CartesianGrid horizontal vertical={false} />
              <XAxis dataKey="month" tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]} tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <Tooltip />
              <Legend verticalAlign="top" align="right" layout="horizontal" iconType="circle" wrapperStyle={{
                    fontFamily: 'Poppins',
                    fontSize: '10px',
                    color: 'black',
                }}/>
              <Bar dataKey="renewable" fill="#0f94fd" name="Renewable" radius={[10, 10, 0, 0]} />
              <Bar dataKey="nonrenewable" fill="#16dacc" name="Non-Renewable" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Chart 2 */}
        <Box sx={{ flex: 1, height: "280px", backgroundColor: "#EAF9FF", borderRadius: "8px", border: "0.5px solid lightgray", minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 5, mb: "13px"}}>
            <Box sx={{ mr: "auto", display: "flex", gap: 2, alignItems: "center" }}>
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: "20ch"}}>{chartName2}</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
            <ChartsMenu handleNameChange={handleRename2}/>
          </Box>
          <ResponsiveContainer width="100%" height="80%" style={{marginLeft: "-30px"}}>
            <BarChart data={data2} margin={{ right: 20, left: 20, bottom: 5 }} barSize={20}>
              <CartesianGrid horizontal vertical={false} />
              <XAxis dataKey="month" tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]} tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <Tooltip />
              <Bar dataKey="consumables" fill="#16dacc" name="Consumables" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Chart 3 */}
        <Box sx={{ flex: 1, backgroundColor: "#EAF9FF", borderRadius: "8px", border: "0.5px solid lightgray", overflow: "hidden", minWidth: 0 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3, py: 1.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: "20ch"}}>{chartName3}</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <Box>
              <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
              <ChartsMenu handleNameChange={handleRename3}/>
            </Box>
          </Box>
          <Box sx={{ display: "flex", borderTop: "1px solid lightgray", height: "200px" }}>
            {/* Pie Chart */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box
                sx={{
                  '& .MuiChartsLegend-root': {
                    display: 'none',
                  },
                  padding: "40px"
                }}
              >
              <PieChart
              series={[
                {
                  data: data3,
                  innerRadius: 60,     // roughly 40%
                  outerRadius: 80,     // roughly 60%
                  startAngle: 90,
                  endAngle: -270,
                  highlightScope: { fade: 'global', highlight: 'item' },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: '#e0e0e0',
                  },
                },
              ]}
              width={200}
              height={200}
            />
            </Box>
            </Box>
            {/* Legend */}
            <Box sx={{ flex: 1, backgroundColor: "#e9f8fc", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid lightgray", }}>
              {data3.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center",flex: 1, py: 1, px: 6, borderBottom: index !== data3.length - 1 ? "1px solid lightgray" : "none" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, display: "inline-block", marginRight: "10px" }} />
                  <p style = {{color: "#475569", fontWeight: 500, fontSize: "13px", fontFamily: "Poppins"}}>{item.name}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* <Popover  open={open} onClose={}><h1>Menu</h1></Popover> */}
      </div>
    </ThemeProvider>
    )
  );
};

export default CustomCharts;
