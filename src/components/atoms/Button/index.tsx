import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  className,
  children,
}) => {
  // const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <span>
      <label>{label}</label>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`btn-base ${className} ${variant} ${disabled ? 'btn-disabled' : ''}`}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
