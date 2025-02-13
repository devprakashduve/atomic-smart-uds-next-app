import { useState } from 'react';
import Link from 'next/link';
import { NavBarLogoLinksProps } from './NavBarLogoLinks.interface';

const NavBarLogoLinks: React.FC<NavBarLogoLinksProps> = ({
  logo,
  links,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full ${backgroundColor || 'bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-menu-dark hover:text-menu-hover"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? 'X' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-menu-background bg-gradient-to-r from-menu-from_background to-menu-to_background p-4 text-menu-dark">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-menu-dark hover:text-menu-hover"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarLogoLinks;
