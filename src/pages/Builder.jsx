import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <h2 className="text-3xl font-bold text-green-900 mb-4">Welcome to your Builder!</h2>
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


      <button
        className="absolute top-4 right-4 text-3xl font-bold"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <nav className="mt-16 px-6">
        <ul className="space-y-4">
          <li><Link to="/" className="text-white hover:text-gray-300">User Account Integration</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Validation & Help</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Export & Share</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Skill suggestion</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Job Description</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Ai Writing Assistant</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function Builder() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={toggleSidebar}
      >
        Build
      </button>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-800">Build you resume locally SA</h1>
      </div>
    </div>
  );
}

export default Builder;
