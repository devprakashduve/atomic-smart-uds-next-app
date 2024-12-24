import React from 'react';
import './Divider.css';
import { DividerProps } from './DividerProps.interface';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = 'gray',
  thickness = 'medium',
}) => {
  const orientationClasses = {
    horizontal: 'divider-horizontal',
    vertical: 'divider-vertical',
  };

  const thicknessClasses = {
    thin: 'divider-thin',
    medium: 'divider-medium',
    thick: 'divider-thick',
  };

  return (
    <div
      className={`divider ${orientationClasses[orientation]} ${thicknessClasses[thickness]} border-${color}`}
    />
  );
};

export default Divider;
