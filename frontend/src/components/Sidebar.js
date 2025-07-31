import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger button outside sidebar */}
      {!isOpen && (
        <button
          aria-label="Open sidebar"
          onClick={() => setIsOpen(true)}
          className="fixed top-10 left-0 z-40 h-14 w-14 bg-indigo-600 text-white rounded-tr-lg rounded-br-lg flex items-center justify-center text-3xl shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform duration-300"
          title="Open sidebar"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-gray-100 p-6 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto flex flex-col shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside sidebar */}
        <button
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
          className="absolute top-10 left-0 h-14 w-14 bg-indigo-600 text-white rounded-tr-lg rounded-br-lg flex items-center justify-center text-3xl shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          title="Close sidebar"
        >
          ×
        </button>

        {/* Sidebar Content */}
        <h2 className="text-2xl font-extrabold mb-8 ml-14 tracking-wide select-none">
          Blog Panel
        </h2>

        <nav className="space-y-4 ml-14 text-base font-semibold text-gray-300">
          <a
            href="#"
            className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            🏠<span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            📝<span>Blogs</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            🖼️<span>Gallery</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition"
          >
            ✍️<span>Post</span>
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;