// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DeletePop from "./components/deletepop"; // Ensure correct path
import ImportContractPop from "./components/importcontractpop";
import DeletePopoverExample from "./components/deletepopexample";
import EditPop from "./components/editpop";
import Settings from "./components/settings";
import CustomFields from "./components/customfields";

const App: React.FC = () => {
  return (
    <Router>
      <div className="call">
        <Routes>
          {/* <Route path="/" element={<ImportContractPop />} /> */}
          <Route path="/deletepopover" element={< DeletePopoverExample />} />
          <Route path="/editpop" element={<EditPop />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customfields" element={< CustomFields />}  />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
