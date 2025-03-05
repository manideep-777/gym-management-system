import { useState } from 'react'
import './App.css'

import LandingPage from './components/users/LandingPage'
import UserRegister from "./components/users/UserRegister";
import UserLogin from "./components/users/UserLogin";

import AdminLanding from './components/admin/adminLandingPage';
import AdminRegister from "./components/admin/AdminRegister";
import AdminLogin from "./components/admin/AdminLogin";
import AddMemberForm from "./components/admin/AddMemberForm";
import UpdateMemberForm from "./components/admin/UpdateMemberForm";
import CreateBills from './components/admin/CreateBills';
import SeperateUserPage from "./components/admin/seperateUserPage"
import MemberPage from './components/members/MemberPage.jsx';

import { AdminProvider } from './components/admin/adminContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />

          <Route path="/member" element={<MemberPage />}></Route>

          <Route path="/admin/bill/:id" element={<CreateBills />} />
          <Route path="/admin/user/:username" element={<SeperateUserPage />} />

          <Route path="/admin" element={
            <AdminProvider><AdminLanding /></AdminProvider> 
            } />
          <Route path="/admin/login" element={
            <AdminProvider><AdminLogin /></AdminProvider> 
            } />
          <Route path="/admin/register" element={
             <AdminProvider><AdminRegister /></AdminProvider> 
            } />
            <Route path="/admin/addUser" element={
             <AdminProvider><AddMemberForm /></AdminProvider> 
            } />
            <Route path="/admin/updateUser" element={
             <AdminProvider><UpdateMemberForm /></AdminProvider> 
            } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
