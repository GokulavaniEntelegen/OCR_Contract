import React from "react";
import { Button, Chip, CssBaseline, ThemeProvider, createTheme, Box, Typography, Stack, IconButton } from "@mui/material";
import '@fontsource/roboto';
import UploadIcon from "@mui/icons-material/Upload";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter_BlackIcon from "../assets/Filter_Black.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

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
  { name: '3 Rejected', value: 40, color: '#0f63fe' },
  { name: '3 Rejected', value: 35, color: '#16dacc' },
  { name: '3 Rejected', value: 25, color: '#fbb040' },
];

const CustomCharts = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", width: "100%" }} className="threeCharts">
        
        {/* Chart 1 */}
        <Box sx={{ flex: 1, height: "280px", backgroundColor: "#EAF9FF", borderRadius: "8px", border: "0.5px solid lightgray", minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 5, mb: "13px"}}>
            <Box sx={{ mr: "auto", display: "flex", gap: 2, alignItems: "center"}}>
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434"}}>No. Of. Auto Renewal Contracts</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
            <IconButton><MoreVertIcon /></IconButton>
          </Box>
          <ResponsiveContainer width="100%" height="80%" style={{marginLeft: "-30px"}}>
            <BarChart data={data} margin={{ right: 20, left: 20, bottom: 5 }} barSize={20}>
              <CartesianGrid horizontal vertical={false} />
              <XAxis dataKey="month" tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]} tickLine={false} tick = {{fontFamily: "Poppins", fontSize:"14"}}/>
              <Tooltip />
              <Legend verticalAlign="top" align="right" layout="horizontal" iconType="circle" wrapperStyle={{
                    fontFamily: 'Poppins',
                    fontSize: '13px',
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
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434"}}>No. Of. Contracts Expiring</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
            <IconButton><MoreVertIcon /></IconButton>
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
              <p style={{fontFamily: "Poppins", fontSize: "16px", fontWeight: "600", color: "#343434"}}>No. of. Contracts in Payment Terms</p>
              <Chip style = {{backgroundColor: "#E2E2E2", color: "#373738", fontFamily: "Poppins", fontSize: "12px"}} label="By quarter" />
            </Box>
            <Box>
              <IconButton><img src={Filter_BlackIcon} alt="icon" width={20} height={20} /></IconButton>
              <IconButton><MoreVertIcon /></IconButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex", borderTop: "1px solid lightgray", height: "200px" }}>
            {/* Pie Chart */}
            <Box sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data3}
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="60%"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data3.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
            {/* Legend */}
            <Box sx={{ width: "50%", backgroundColor: "#e9f8fc", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid lightgray", }}>
              {data3.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center",flex: 1, py: 1, px: 6, borderBottom: index !== data3.length - 1 ? "1px solid lightgray" : "none" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, display: "inline-block", marginRight: "10px" }} />
                  <p style = {{color: "#475569", fontWeight: 500, fontSize: "17px", fontFamily: "Poppins"}}>{item.name}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default CustomCharts;
