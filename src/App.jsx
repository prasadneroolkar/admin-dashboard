import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./styles/app.scss";

const Dashboard = lazy(() => import("./pages/Dashboard")); //code splitting
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
