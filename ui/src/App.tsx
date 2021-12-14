import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navBar/Navbar";
import { loadEnvs } from "./env";
import Dashboard from "./pages/dashboard/Dashboard";
import Help from "./pages/Help";
import Keymanager from "./pages/keymanager/Keymanager";
// Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  loadEnvs();

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/keymanager" element={<Keymanager />} />
            <Route path="/about" element={<Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
