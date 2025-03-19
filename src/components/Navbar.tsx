"use client"; // Allows interactivity (mobile menu toggle)

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">
              VibeSticks Wellness
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-secondary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-secondary">
                Community
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-secondary">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col bg-primary px-4 py-2 space-y-2">
            <li>
              <Link href="/" className="block text-white hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-white hover:text-secondary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/community" className="block text-white hover:text-secondary">
                Community
              </Link>
            </li>
            <li>
              <Link href="/resources" className="block text-white hover:text-secondary">
                Resources
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
