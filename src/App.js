import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, Switch
import StateDecoder from './StateDecoder';
import './App.css'; // Import the CSS file
import HookDetails from './HookDetail';
import MainDetail from './MainDetail';
import { Xumm } from 'xumm';
function App() {
 

  return (

    <Router>
      <Routes>
      <Route path="/" element={<MainDetail />}></Route>
        <Route path="/hook-details" element={<HookDetails/>} />
      </Routes>
    </Router>

  );
}

export default App;
