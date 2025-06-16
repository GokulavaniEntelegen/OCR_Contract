import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/UserDashboard";



function App() {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/userdashboard" element=<Dashboard/>/>
        </Routes>
        </BrowserRouter>        
    );
}

export default App;
