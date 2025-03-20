"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold cursor-pointer text-white">
            VibeSticks Wellness
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {["Home", "Blog", "Community", "Resources", "Tools"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-400 transition">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-gray-900 px-4 py-2 space-y-2"
          >
            {["Home", "Blog", "Community", "Resources", "Tools"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase()}`} className="block text-white hover:text-gray-400">
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}
