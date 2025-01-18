import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import { classNames } from '@/Components/utilities/componentsMethods';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  children,
  rounded = false,
  roundedFull = false,
  size = 'md',
  isLink = false,
}) => {
  let btnSize = '';
  switch (size) {
    case 'xs':
      btnSize = `py-1 px-2.5 text-sm `;
      break;
    case 'sm':
      btnSize = `py-1.5 px-3 text-sm  `;
      break;
    case 'md':
      btnSize = `py-2 px-4  text-sm  `;
      break;
    case 'lg':
      btnSize = `py-2.5 px-5 text-base `;
      break;
    case 'xl':
      btnSize = `py-3.5 px-6 text-base  `;
      break;
    default:
      btnSize = `py-2 px-4  text-sm`;
      break;
  }
  const buttonClass = classNames(variant, isLink ? 'btn-link' : btnSize);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${buttonClass} ${disabled ? 'btn-disabled' : ''} ${rounded ? 'rounded' : ''} ${roundedFull ? 'rounded-full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
