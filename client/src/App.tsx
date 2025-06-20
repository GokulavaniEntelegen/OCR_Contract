import React from "react"
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/UserDashboard";
import DashboardLayout from "./pages/Dashboard/UserDashboardLayout";
import AllContracts from "./pages/AllContracts/AllContracts";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import AIChat from "./pages/AIChat/AIChat";
import ContractScan from "./pages/ContractScan/ContractScan";
import Trialpage from "./pages/TrialPage";


function App() {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path="/all-contracts" element = {<AllContracts/>}/>
            <Route path="/activity-history" element = {<ActivityHistory/>}/>
            <Route path="/ai-chat" element = {<AIChat/>}/>
            <Route path="/contract-scan" element = {<ContractScan/>}/>
            <Route path="/trial-page" element = {<Trialpage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>        
    );
}

export default App;
