import React from 'react';
import { BreadcrumbProps } from './BreadcrumbProps.interface';
import './Breadcrumb.css';

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.href ? (
              <a href={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-600">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-600">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
