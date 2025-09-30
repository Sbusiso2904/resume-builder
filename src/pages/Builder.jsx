import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  
  return (
    <>
      <div className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Resume Tools</h2>
            <button
              className="text-2xl font-bold hover:text-gray-300"
              onClick={toggleSidebar}
            >
              &times;
            </button>
          </div>
          
          <nav className="mt-4">
            <ul className="space-y-4">
              <li>
                <Link to="/maindash/builder" className="block py-2 px-4 bg-green-700 rounded hover:bg-green-600 transition duration-200">
                  Create New Resume/CV
                </Link>
              </li>
              <li>
                <Link to="/maindash/upload" className="block py-2 px-4 bg-green-700 rounded hover:bg-green-600 transition duration-200">
                  Improve Your Resume/CV
                </Link>
              </li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">User Account Integration</Link></li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">Validation & Help</Link></li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">Export & Share</Link></li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">Skill suggestion</Link></li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">Job Description</Link></li>
              <li><Link to="/maindash" className="block py-2 px-4 hover:bg-green-700 rounded transition duration-200">Ai Writing Assistant</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

function Builder() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-100 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-900">Build Your Resume</h1>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold transition duration-200"
              onClick={toggleSidebar}
            >
              Build Tools
            </button>
          </div>
          <p className="text-gray-600 mt-2 text-lg">Create and customize your resume locally</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition duration-200">
            <Link to="/maindash/builder">
              <h3 className="text-red-900 text-xl font-bold mb-4">
                Create New Resume/CV
              </h3>
              <p className="text-gray-600">
                Start from scratch using our builder with step-by-step guidance.
              </p>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition duration-200">
            <Link to="/maindash/upload">
              <h3 className="text-green-900 text-xl font-bold mb-4">
                Improve Your Resume/CV
              </h3>
              <p className="text-gray-600">
                Upload your existing resume and get AI-powered suggestions.
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Resume Builder Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-800">Professional Templates</h3>
              <p className="text-gray-600 text-sm mt-2">Choose from ATS-friendly templates</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-green-800">Easy Editing</h3>
              <p className="text-gray-600 text-sm mt-2">Real-time preview and editing</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-green-800">Export Options</h3>
              <p className="text-gray-600 text-sm mt-2">Download as PDF, Word, or HTML</p>
            </div>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Builder;