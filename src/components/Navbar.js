"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Working Hours", href: "/opening-hours" },
    { label: "Contact Us", href: "/contact" },
  ];

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <nav className="bg-white/80 backdrop-blur-none shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Site Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-3xl font-extrabold text-stone-500 transition-colors hover:text-stone-600"
          >
            {/* Logo Image */}
            <Image
              src="/logo.jpg" // Replace with your logo file path in /public folder
              alt="Perth Carvery Logo"
              width={50} // Adjust size as needed
              height={50}
              priority
              className="rounded-full"
            />
            <span>Perth Carvery</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-medium text-stone-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group hover:text-stone-600 transition-colors"
              >
                {item.label}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-stone-600 mt-1 rounded"></span>
              </Link>
            ))}
          </div>

          {/* Phone & Hamburger */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:block text-stone-600 font-semibold select-none">
              📞 0141 611 3193
            </div>
            <button
              className="md:hidden p-2 rounded-md hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
            >
              <Menu size={26} className="text-stone-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 left-0 w-64 h-full bg-white z-50 p-8 shadow-xl flex flex-col"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              aria-label="Mobile Menu"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-extrabold text-amber-700">Perth Carvery</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                  className="p-1 rounded hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <X size={26} className="text-amber-700" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 text-stone-600 text-lg font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-amber-200 text-stone-600 font-semibold select-none">
                📞 0141 611 3193
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
