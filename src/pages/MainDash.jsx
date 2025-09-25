import React from "react";
import {Link, Outlet} from "react-router-dom";


const MainDash = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black-50 via-white to-blue-100">
            {/*mainDash TopNav*/}
            <nav className="fixed top-0 left-0 w-full bg-green shadow-md z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-extrabold text-green-900 tracking-wide">Resume Builder SA</h1>
                    <div className="flex space-x-6 text-lg text-green-700 font-semibold">
                        <Link to="Home" className="hover:bg-green px-3 py-2 rounded transition duration-200">Home</Link>
                        <Link to="/builder" className="hover:bg-green px-3 py-2 rounded transition duration-200">builder</Link>
                        <Link to="/upload" className="hover:bg-green px-3 py-2 rounded transition duration-200">Upload</Link>
                        <Link to="/contacts" className="hover:bg-green px-3 py-2 rounded transition duration-200">Contacts</Link>
                        <Link to="/about" className="hover:bg-green px-3 py-2 rounded transition duration-200">About</Link>
                    </div>
                </div>
            </nav>
            <div className="pt-24 max-w-7xl mx-auto px-6">

                <Outlet />
            </div>

        </div>
    )
}

export default MainDash;