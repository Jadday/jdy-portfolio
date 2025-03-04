"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="bg-[#800303] text-white p-4 border-b border-[#30363d]">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold text-terminalRed tracking-wide nav-link"
        >
          James Daw
        </Link>

        {/* Hamburger button visible only on mobile */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links: Hidden on mobile (smaller than "sm") */}
        <div className="hidden sm:flex space-x-6 text-lg items-center">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/portfolio" className="nav-link">
            Projects
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/">
            <Image
              src="/navbar-icon3.png"
              alt="Description"
              width={40}
              height={40}
              className="navbar-icon-glow"
            />
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Links: Rendered when hamburger is toggled */}
      {isMobileNavOpen && (
        <div className="sm:hidden mt-4 space-y-2 text-center">
          <Link
            href="/about"
            className="block nav-link"
            onClick={() => setMobileNavOpen(false)}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="block nav-link"
            onClick={() => setMobileNavOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="block nav-link"
            onClick={() => setMobileNavOpen(false)}
          >
            Blog
          </Link>
          <Link href="/" onClick={() => setMobileNavOpen(false)}>
            <Image
              src="/navbar-icon3.png"
              alt="Description"
              width={40}
              height={40}
              className="navbar-icon-glow inline"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
