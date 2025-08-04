import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 40 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const navItems = [
  { icon: "🏠", label: "Home", to: "/home" },
  { icon: "📝", label: "Blogs", to: "/blogs" },
  { icon: "🖼️", label: "Gallery", to: "/gallery" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open sidebar"
          className="fixed top-6 left-0 z-50 h-12 w-12 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-r-lg shadow-lg flex items-center justify-center text-2xl hover:scale-110 hover:shadow-indigo-500/70 transition-transform duration-300"
        >
          ☰
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#121629] via-[#1d2547] to-[#0d132b] text-gray-100 p-6 z-50 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
              className="absolute top-6 left-0 h-12 w-12 bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-r-lg shadow-lg flex items-center justify-center text-2xl hover:scale-110 hover:shadow-indigo-500/70 transition-transform duration-300"
            >
              ×
            </button>

            <h2 className="text-3xl font-extrabold mb-12 mt-24 ml-10 tracking-wide select-none text-indigo-400 drop-shadow-lg">
            </h2>

            <nav className="space-y-6 ml-10 text-lg font-semibold flex flex-col">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    whileHover={{
                      scale: 1.07,
                      background:
                        "linear-gradient(90deg, rgba(99, 102, 241, 0.3) 0%, rgba(147, 197, 253, 0.4) 100%)",
                      boxShadow:
                        "0 0 10px rgba(99, 102, 241, 0.6), 0 0 20px rgba(147, 197, 253, 0.4)",
                      borderLeft: "4px solid #6366F1", // indigo-500 left border on hover
                      paddingLeft: "1rem",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`rounded-md cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white border-l-4 border-indigo-500 pl-4"
                        : ""
                    }`}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center gap-6 py-3 px-4 rounded-md text-gray-300 hover:text-white transition-colors duration-250"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
