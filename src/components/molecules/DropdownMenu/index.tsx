import React, { useState } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuProps,
} from './DropdownMenuProps.interface';
import './DropdownMenu.css';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, buttonLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled) return;
    item.onClick();
    setIsOpen(false); // Close the menu after selecting an item
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="btn rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
      >
        {buttonLabel}
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className={`block w-full px-4 py-2 text-left text-sm ${item.disabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                disabled={item.disabled}
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
