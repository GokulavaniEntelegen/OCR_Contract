
import React from "react"
import "@fontsource/inter";
import "@fontsource/source-sans-pro";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/UserDashboard";
import DashboardLayout from "./pages/Dashboard/UserDashboardLayout";
import AllContracts from "./pages/AllContracts/AllContracts";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import AIChat from "./pages/AIChat/AIChat";
import ContractScan from "./pages/ContractScan/ContractScan";
import Trialpage from "./pages/TrialPage";
import SignIn from "./pages/Login/SignIn";
import LoginLeft from "./pages/Login/LoginLeft/LoginLeft";
import ResetPassword from "./pages/ResertPassword/ResetPassword";
import OtpLogin from "./pages/OtpLogin/OtpLogin";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import CreateNewPassword from "./pages/CreatePassword/CreatePassword";
import Invite from "./pages/InvitTeam/InvitTeam";
import SetAccPassword from "./pages/SetPassword/SetPassword";
// import ImportContractPop from "./components/importcontractpop";
import DeletePopoverExample from "./components/deletepopexample";
import EditPop from "./components/editpop";
import Settings from "./components/settings";
import CustomFields from "./components/customfields";


function App() {

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path="all-contracts" element = {<AllContracts/>}/>
            <Route path="activity-history" element = {<ActivityHistory/>}/>
            <Route path="ai-chat" element = {<AIChat/>}/>
            <Route path="contract-scan" element = {<ContractScan/>}/>
            <Route path="trial-page" element = {<Trialpage/>}/>
          </Route>

          <Route path="/" element = {<SignIn/>}>
          <Route index element={<LoginLeft/>} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path='otp-login' element={<OtpLogin/>}/>
          <Route path ="create-account" element = {<CreateAccount/>}/>
          <Route path="createnewpassword" element={<CreateNewPassword/>} />
          <Route path="invite" element={<Invite/>}/>
          <Route path="setaccpassword" element={<SetAccPassword/>} />
          </Route>

          <Route path="/deletepopover" element={< DeletePopoverExample />} />
          <Route path="/editpop" element={<EditPop />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customfields" element={< CustomFields />}  />
        </Routes>
        </BrowserRouter>        
    );
}

export default App;
