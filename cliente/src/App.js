import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // tu componente de menú deslizable
import IniSesion from "./pages/iniSesion";
import Inmobiliaria from "./pages/inmobiliaria";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<IniSesion />} />
            <Route path="/inmobiliaria" element={<Inmobiliaria />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
