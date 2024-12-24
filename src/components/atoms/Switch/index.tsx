import React from 'react';
import { SwitchProps } from './SwitchProps.interface';
import './Switch.css';

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  color = 'blue',
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div
      onClick={handleChange}
      className={`switch-container ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${color}`}
    >
      <div
        className={`switch-thumb ${checked ? 'translate-x-6' : 'translate-x-1'} ${disabled ? 'bg-gray-300' : 'bg-white'}`}
      />
      <div
        className={`switch-track ${checked ? 'bg-${color}-500' : 'bg-gray-300'}`}
      ></div>
    </div>
  );
};

export default Switch;
