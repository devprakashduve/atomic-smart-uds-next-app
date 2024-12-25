import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import './../../../app/globals.css';
import './Button.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  className = '',
  children,
}) => {
  const buttonClass = classNames(...className, variant);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${buttonClass} ${disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
