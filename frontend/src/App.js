import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication/>} />
        <Route path="/register" element={<Authentication/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
