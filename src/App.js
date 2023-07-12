import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import Home from "./pages/Home/Home";
import "./styles/app.scss";

const App = () => {

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <div className={`burger-background ${mobileNavIsOpen ? 'blur' : ''}`} onClick={handleToggleSidebar}>
        </div>
        <Navbar handleToggleSidebar={handleToggleSidebar} />
        <MobileNavbar isOpen={mobileNavIsOpen} handleToggleSidebar={handleToggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;