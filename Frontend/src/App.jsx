import { useState } from 'react'
import './App.css'

import LandingPage from './components/users/LandingPage'
import UserRegister from "./components/users/UserRegister";
import UserLogin from "./components/users/UserLogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/users" element={<LandingPage />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
