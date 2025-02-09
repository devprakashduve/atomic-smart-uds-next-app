import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import Link from '@/Components/Atoms/Link';
import React, { useState } from 'react';

interface Link {
  name: string;
  href: string;
  subLinks?: Link[];
}

interface NavbarProps {
  logo: string;
  links: Link[];
}

interface DropdownMenuProps {
  isOpen: boolean;
  subLinks: Link[];
}

interface MobileMenuProps {
  isOpen: boolean;
  links: Link[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, subLinks }) =>
  isOpen ? (
    <div className="from-menu-background to-menu-to_background rounded-menu mt-0 w-full min-w-48 bg-gradient-to-r p-1 shadow-lg">
      {subLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:bg-menu-hover rounded-menu block w-full px-4 py-2"
        >
          {link.name}
        </Link>
      ))}
    </div>
  ) : null;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let Elements = null;
  isOpen
    ? (Elements = (
        <div className="from-menu-background to-menu-to_background rounded-menu bg-gradient-to-r p-1 text-left shadow-lg">
          {links.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="relative">
                <Link
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="hover:bg-menu-hover rounded-menu flex w-full items-center justify-between px-4 py-2"
                  href={'#'}
                  underlineHover={false}
                >
                  {link.name}
                  <Icon name={'chevronDown'} variant={'solid'} />
                </Link>
                <div className="pl-4">
                  <DropdownMenu
                    isOpen={isDropdownOpen}
                    subLinks={link.subLinks}
                  />
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                underlineHover={false}
                className="hover:bg-menu-hover rounded-menu block px-4 py-2"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      ))
    : null;

  return Elements;
};

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="from-menu-background to-menu-to_background rounded-menu bg-gradient-to-r p-1 text-center shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-6 sm:flex">
            {links.map((link) =>
              link.subLinks ? (
                <div key={link.name} className="relative">
                  <Link
                    onClick={() => handleLinkClick(link.name)}
                    className={`hover:text-menu-dark flex items-center ${activeLink === link.name ? 'underline' : ''}`}
                    href={'#'}
                  >
                    {link.name}
                    <Icon name={'chevronDown'} variant={'solid'} />
                  </Link>
                  <div className="absolute top-11">
                    <DropdownMenu
                      isOpen={isDropdownOpen && activeLink === link.name}
                      subLinks={link.subLinks}
                    />
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={activeLink === link.name ? 'underline' : ''}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button variant="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <Icon
                  name={'close'}
                  variant={'solid'}
                  className="text-menu-dark hover:text-menu transition-all"
                />
              ) : (
                <Icon
                  name={'bars3'}
                  variant={'solid'}
                  className="text-menu-dark hover:text-menu transition-all"
                />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} links={links} />
    </nav>
  );
};

export default Navbar;
