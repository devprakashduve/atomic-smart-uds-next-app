import React from 'react';
import './Tag.css';
import { TagProps } from './TagProps.interface';

const Tag: React.FC<TagProps> = ({
  label,
  color = 'blue',
  onClick,
  removable = false,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the onClick from being triggered when clicking on the remove icon
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`tag ${color} flex cursor-pointer items-center rounded-full px-4 py-1 text-sm font-medium`}
      onClick={onClick}
    >
      {label}
      {removable && (
        <button
          className="tag-remove ml-2 text-xs text-gray-600 hover:text-gray-800"
          onClick={handleRemove}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Tag;
