import React from 'react';
import { MenuProps, MenuItem } from './MenuProps.interface';
import './Menu.css';

const Menu: React.FC<MenuProps> = ({ items, className }) => {
  return (
    <ul className={`menu-container ${className || ''}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${item.disabled ? 'menu-item-disabled' : ''}`}
          onClick={!item.disabled ? item.onClick : undefined}
        >
          {item.icon && <span className="menu-item-icon">{item.icon}</span>}
          <span className="menu-item-label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
