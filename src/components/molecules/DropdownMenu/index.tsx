import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuProps,
} from './DropdownMenuProps.interface';
import './DropdownMenu.css';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, buttonLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;
    item.onClick();
    setIsOpen(false); // Close the menu after selecting an item
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="btn rounded-md px-4 py-2 hover:bg-line focus:outline-none"
      >
        {buttonLabel}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="dropdown-menu absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
          role="menu"
          onKeyDown={handleKeyDown}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className={`block w-full px-4 py-2 text-left text-sm ${item.disabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                disabled={item.disabled}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
