import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Profile from "./components/Profile";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Login" element={<Loginpage/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="*" element={<div>404 - Page Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
