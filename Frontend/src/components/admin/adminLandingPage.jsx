import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import api from "../axios-utils/baseAxios";

import { AdminContext } from "./adminContext";

import UserMembers from "./user-memders";

const AdminLanding = () => {  
  const { currentAdmin, setCurrentAdmin } = useContext(AdminContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!currentAdmin);
  }, []);

  const handleLogout = async () => {
    try{
        let res = await api.get('/admin/logout');
        console.log(res.data);
    }catch(err){
        console.log("Error :",err)
    }
    setCurrentAdmin(null);
    setIsLoggedIn(false);
  };

  return (
      <div className="min-h-screen bg-gray-100">
        {console.log(currentAdmin?.username)}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">FitTrack</h1>
        <div className="flex gap-2">
            {/* <span>{currentAdmin?.username}</span> */}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded transition hover:bg-red-700">Logout</button>
          ) : (
            <>
              <Link to="/admin/register" className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-700">Sign Up</Link>
              <Link to="/admin/login" className="bg-gray-500 text-white px-4 py-2 rounded transition hover:bg-gray-700">Login</Link>
            </>
          )}
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        {/* <h2 className="text-3xl font-semibold md:text-4xl">Welcome to FitTrack Admin Dashboard</h2>
        <p className="text-gray-700 mt-2 text-base md:text-lg">Manage your gym effectively.</p>
        <p className="text-gray-700 mt-2 text-base md:text-lg">Please sign up or login.</p> */}
        <UserMembers />
      </main>
    </div>
  );
};

export default AdminLanding;
