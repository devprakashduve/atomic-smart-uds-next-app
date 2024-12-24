import React from 'react';
import { InputProps } from './InputProps.interface';
import './Input.css';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input-base ${disabled ? 'input-disabled' : ''}`}
    />
  );
};

export default Input;
