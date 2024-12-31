import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Profile from "./components/Profile";
import Search from './components/Search';
import JobPost from "./components/JobPost";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/JobPost" element={<JobPost />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
