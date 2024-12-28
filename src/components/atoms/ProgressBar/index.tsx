import React from 'react';

import { ProgressBarProps } from './ProgressBarProps.interface';

import './ProgressBar.css';

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = 'blue',
  height = '4px',
  striped = false,
}) => {
  const progress = (value / max) * 100;

  return (
    <div
      className="progress-bar-container w-full bg-gray-300"
      style={{ height }}
    >
      <div
        className={`progress-bar ${striped ? 'progress-striped' : ''} bg-${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
