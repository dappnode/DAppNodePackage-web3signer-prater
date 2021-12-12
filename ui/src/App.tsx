import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import NavigationBar from "./components/navBar/Navbar";
import { loadEnvs } from "./env";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Keymanager from "./pages/Keymanager";

function App() {
  loadEnvs();

  return (
    <>
      <BrowserRouter>
        <div className="nav-bar">
          <NavigationBar />
        </div>
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
