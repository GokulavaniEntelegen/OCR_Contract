import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/UserDashboard";
import DashboardLayout from "./pages/Dashboard/UserDashboardLayout";
import AllContracts from "./pages/AllContracts/AllContracts";



function App() {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path="all-contracts" element = {<AllContracts/>}/>
          </Route>
        </Routes>
        </BrowserRouter>        
    );
}

export default App;
