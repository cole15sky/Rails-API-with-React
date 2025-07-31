import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
        className="fixed top-10 left-0 z-40 h-14 w-14 bg-indigo-600 text-white rounded-tr-lg rounded-br-lg flex items-center justify-center shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform duration-300"
        title="Open sidebar"
      >
        ≡
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-gray-100 p-6 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto flex flex-col shadow-lg ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
          className="absolute top-10 left-0 h-14 w-14 bg-indigo-600 text-white rounded-tr-lg rounded-br-lg flex items-center justify-center shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          title="Close sidebar"
        >
          ×
        </button>


        <h2 className="text-2xl font-extrabold mb-8 ml-14 tracking-wide select-none">Blog Panel</h2>
        <nav className="space-y-4 ml-14 text-base font-semibold text-gray-300">
          <Link to="/" className="block py-2 hover:text-white hover:bg-indigo-600 rounded px-4">Home</Link>
          <Link to="/blogs" className="block py-2 hover:text-white hover:bg-indigo-600 rounded px-4">Blogs</Link>
          <Link to="/gallery" className="block py-2 hover:text-white hover:bg-indigo-600 rounded px-4">Gallery</Link>
          <Link to="/post" className="block py-2 hover:text-white hover:bg-indigo-600 rounded px-4">Post</Link>
          <Link to="/login" className="block py-2 hover:text-white hover:bg-indigo-600 rounded px-4">Login</Link>
        </nav>
      </aside>
    </div>
  );
};

export default HeaderSidebar;
