import React, { useState } from 'react';
import './Tooltip.css';
import { TooltipProps } from './TooltipProps.interface';

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  color = 'black',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="tooltip-container relative inline-block">
      <span
        className="tooltip-target cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ?
      </span>
      {isHovered && (
        <div className={`tooltip-content ${position} ${color}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
