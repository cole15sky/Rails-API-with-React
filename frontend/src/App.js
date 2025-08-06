import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authentication, { PageType } from './pages/Authentication';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Authentication pageType={PageType.LOGIN} />} />
        <Route path="/register" element={<Authentication pageType={PageType.REGISTER} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
