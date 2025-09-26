import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import ResumeTemp from "./ResumeTemp";
import TemplatePreview from "./TemplatePreview";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Contacts from "./pages/Contacts";
import Builder from "./pages/Builder";
import About from "./pages/About";
import AuthForm from "./pages/AuthForm";
import CreateResume from "./pages/CreateResume";
import ImproveResume from "./pages/ImproveResume";
import MainDash from "./pages/MainDash";

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-200 p-6">

          <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
              
              <h1 className="text-2xl font-bold text-gray-800">
                Resume Builder SA
              </h1>

                <div className="flex space-x-6 text-lg text-blue-600">
                <Link to="/" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Home</Link>
                <Link to="/authform" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Login</Link>
                <Link to="/builder" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Builder</Link>
                <Link to="/upload" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Upload</Link>
                <Link to="/contacts" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">Contacts</Link>
                <Link to="/about" className="hover:bg-blue-100 px-3 py-2 rounded transition duration-200">About</Link>
              </div>
            </div>
          </nav> 

          <div className="pt-24">
          </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto mb-12">
                  <Link
                    to="/create"
                    className="flex-1 bg-white rounded-lg shadow p-8 cursor-pointer hover:underline"
                  >
                    <h3 className="text-red-900 mt-5 text-base font-medium tracking-tight">
                      Create New Resume/CV
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Start from scratch using our builder.
                    </p>
                  </Link>

                  <Link
                    to="/improve"
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

                <Home />
              </>
            }
          />

          <Route path="/maindash" element={<MainDash />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />            

          <Route path="*" element={<h1 className="text-center text-red-600 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
    
  );
}
export default App;
