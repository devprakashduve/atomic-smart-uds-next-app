import React from 'react';
import { RadioButtonProps } from './RadioButtonProps.interface';
import './RadioButton.css';

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
  name,
}) => {
  return (
    <label className="radio-label">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        name={name}
        className="radio-input"
      />
      {label}
    </label>
  );
};

export default RadioButton;
