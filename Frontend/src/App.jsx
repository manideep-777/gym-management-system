import { useState } from 'react'
import './App.css'

import LandingPage from './components/users/LandingPage'
import UserRegister from "./components/users/UserRegister";
import UserLogin from "./components/users/UserLogin";

import AdminLanding from './components/admin/adminLandingPage';
import AdminRegister from "./components/admin/AdminRegister";
import AdminLogin from "./components/admin/AdminLogin";
import { AdminProvider } from './components/admin/adminContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<LandingPage />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />

          <Route path="/admin" element={
            <AdminProvider><AdminLanding /></AdminProvider> 
            } />
          <Route path="/admin/login" element={
            <AdminProvider><AdminLogin /></AdminProvider> 
            } />
          <Route path="/admin/register" element={
             <AdminProvider><AdminRegister /></AdminProvider> 
            } />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
