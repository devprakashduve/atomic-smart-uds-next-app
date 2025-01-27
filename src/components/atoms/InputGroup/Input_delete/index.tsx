import React, { useEffect, useState } from 'react';
import { InputProps } from './InputProps.interface';
import './../../../../app/globals.css';
import './Input.css';
import { classNames } from '@/Components/utilities/componentsMethods';
import Label from '../../Label';
import Icon from '../../Icon';

const Input: React.FC<InputProps> = ({
  value: initialValue,
  onChange,
  placeholder = '',
  disabled = false,
  type,
  label,
  id,
  name,
  customClassNames,
  size,
  isRequired,
  rounded,
  roundedFull,
  showIcon = false,
  customIconSVG,
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [iconName, setIconName] = useState('');
  const [inputType, setInputType] = useState(type);

  let boxSize = 'h-10';
  switch (size) {
    case 'lg':
      boxSize = 'h-14';
      break;
    case 'md':
      boxSize = 'h-12';
      break;
    case 'sm':
      boxSize = 'h-10';
      break;
    default:
      boxSize = 'h-10';
      break;
  }

  useEffect(() => {
    switch (inputType) {
      case 'password':
        setIconName('openEye');
        break;
      case 'email':
        setIconName('envelop');
        break;
      case 'tel':
        setIconName('phone');
        break;
      default:
        break;
    }
  }, [inputType]);
  const inputClass = classNames(
    'w-full bg-transparent placeholder:text-letter-light text-letter text-sm border border-line-light hover:border-line focus:border-line-dark pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none shadow-sm',
    customClassNames,
    boxSize,
    error && 'border border-error hover:border-error focus:border-error',
    rounded && 'rounded',
    roundedFull && 'rounded-full'
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    let errorMessage = '';
    if (isRequired && !newValue) {
      errorMessage = 'This field is required.';
    } else {
      switch (type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(newValue)) {
            errorMessage = 'Invalid email address.';
          }
          break;
        case 'number':
          if (isNaN(Number(newValue))) {
            errorMessage = 'Must be a number.';
          }
          break;
        case 'tel':
          const telRegex = /^\+?[1-9]\d{1,14}$/;
          if (!telRegex.test(newValue)) {
            errorMessage = 'Invalid phone number.';
          }
          break;
        case 'password':
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(newValue)) {
            errorMessage =
              'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
          }
          break;
        default:
          break;
      }
    }

    setError(errorMessage);

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <div className="relative mt-4 w-full">
        {label && (
          <Label
            customClassNames="block mb-2 text-sm text-letter"
            htmlFor={name}
          >
            {label}
            {isRequired ? <span className="text-error"> *</span> : ''}
          </Label>
        )}

        <div className="relative">
          <input
            title={name}
            type={inputType}
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${inputClass} ${disabled ? 'input-disabled' : ''} ${error ? 'input-error' : ''}`}
            required={isRequired}
          />

          {showIcon && (
            <span
              onClick={() => {
                if (type === 'password') {
                  setIconName(iconName === 'openEye' ? 'closeEye' : 'openEye');
                  setInputType(inputType === 'password' ? 'text' : 'password');
                }
              }}
            >
              {customIconSVG ? (
                <Icon name={''}>{customIconSVG}</Icon>
              ) : (
                <Icon name={iconName} />
              )}
            </span>
          )}
        </div>
        {error && <p className="text-error">{error}</p>}
      </div>
    </>
  );
};

export default Input;
