import React from "react";
import { Link, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import Builder from "./Builder";
import Upload from "./Upload";
import Contacts from "./Contacts";
import About from "./About";


function DashboardHome() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-900 mb-4">Welcome to Your Dashboard!</h2>
      <p className="text-gray-600 text-lg">You have successfully logged in to your Resume Builder dashboard.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Quick Actions</h3>
          <ul className="mt-2 space-y-2">
            <li>• Create a new resume</li>
            <li>• Upload existing resume</li>
            <li>• View your templates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const MainDash = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-100">
      <nav className="fixed top-0 left-0 w-full bg-green-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-green-900 tracking-wide">
            Resume Builder SA 
          </h1>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 text-lg text-green-700 font-semibold">
              <Link to="/maindash" className="hover:bg-green-200 px-3 py-2 rounded transition duration-200">Dashboard</Link>
              <Link to="/maindash/builder" className="hover:bg-green-200 px-3 py-2 rounded transition duration-200">Builder</Link>
              <Link to="/maindash/upload" className="hover:bg-green-200 px-3 py-2 rounded transition duration-200">Upload</Link>
              <Link to="/maindash/contacts" className="hover:bg-green-200 px-3 py-2 rounded transition duration-200">Contacts</Link>
              <Link to="/maindash/about" className="hover:bg-green-200 px-3 py-2 rounded transition duration-200">About</Link>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <div className="pt-24 max-w-7xl mx-auto px-6">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="builder" element={<Builder />} />
          <Route path="upload" element={<Upload />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainDash;