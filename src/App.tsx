import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Map from './components/Map';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col justify-between items-center bg-[#2418EB]">
          <Navbar />
          <Routes>
            {/* <Home /> */}
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <div className="w-screen min-h-screen bg-hero bg-cover bg-no-repeat"> */}
    </div>
  );
};

export default App;
