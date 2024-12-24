import React, { useState } from 'react';
import { NavBarProps } from './NavbarProps.interface';
import './Navbar.css';

const NavBar: React.FC<NavBarProps> = ({
  logo,
  links,
  backgroundColor = 'bg-blue-600',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${backgroundColor} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="hidden space-x-6 md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 md:hidden">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-2 text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
