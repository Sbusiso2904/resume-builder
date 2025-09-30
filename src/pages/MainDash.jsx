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
      
      <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto mb-12">
        {/* First Card - Create Resume */}
        <Link
          to="/maindash/builder"
          className="flex-1 bg-white rounded-lg shadow p-8 cursor-pointer hover:underline"
        >
          <h3 className="text-red-900 mt-5 text-base font-medium tracking-tight">
            Create New Resume/CV
          </h3>
          <p className="text-gray-500 mt-2">
            Start from scratch using our builder.
          </p>
        </Link>

        {/* Second Card - Improve Resume */}
        <Link
          to="/maindash/upload"
          className="flex-1 bg-white rounded-lg shadow p-8 cursor-pointer hover:underline"
        >
          <h3 className="text-green-900 dark:text-black mt-5 text-base font-medium tracking-tight">
            Improve Your Resume/CV
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Upload your resume and get suggestions.
          </p>
        </Link>
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