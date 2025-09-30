import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Contacts from "./pages/Contacts";
import Builder from "./pages/Builder";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import CreateResume from "./pages/CreateResume";
import ImproveResume from "./pages/ImproveResume";
import MainDash from "./pages/MainDash";


function PublicNav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Resume Builder SA
        </h1>
        <div className="flex space-x-6 text-lg text-blue-600">
          <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
          <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
            <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
          <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/maindash');

  return (
    <div className="min-h-screen bg-gray-200 p-6">

      {!isDashboardRoute && <PublicNav />}
      
      <div className={!isDashboardRoute ? "pt-24" : ""}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/authform" element={<AuthForm />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateResume />} />
          <Route path="/improve" element={<ImproveResume />} />
          <Route path="/maindash/*" element={<MainDash />} />
          
          {/* 404 route */}
          <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;