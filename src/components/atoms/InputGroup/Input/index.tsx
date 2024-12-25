import React, { useState } from 'react';
import { InputProps } from './InputProps.interface';
import './../../../../app/globals.css';
import './Input.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Input: React.FC<InputProps> = ({
  value: initialValue,
  onChange,
  placeholder = '',
  disabled = false,
  type = 'text',
  label = 'Input',
  id = 'input',
  name = 'input',
  className,
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const inputClass = classNames(...className);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    let errorMessage = '';
    if (!newValue) {
      errorMessage = 'This field is required.';
    } else {
      switch (type) {
        case 'text':
          if (newValue.length <= 3) {
            errorMessage = 'Length should be greater than 3.';
          }
          break;
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
      onChange(e);
    }
  };

  return (
    <div className="m-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-base ${inputClass} ${disabled ? 'input-disabled' : ''} ${error ? 'input-error' : ''}`}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
