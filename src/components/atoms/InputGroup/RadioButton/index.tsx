import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButtonProps.interface';
import './../../../../app/globals.css';
import './RadioButton.css';

const RadioButton: React.FC<RadioButtonProps> = ({
  initialChecked = false,
  onChange,
  label,
  name,
  size,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };
  let inputSize = 'h-4 w-4';
  let indicatorSize = 'h-1/2 w-1/2';
  switch (size) {
    case 'lg':
      inputSize = 'h-8 w-8';
      indicatorSize = 'h-2 w-2';
      break;
    case 'md':
      inputSize = 'h-6 w-6';
      indicatorSize = 'h-2 w-2';
      break;
    case 'sm':
      inputSize = 'h-4 w-4';
      indicatorSize = 'h-1/2 w-1/2';
      break;
    default:
      inputSize = 'h-4 w-4';
      indicatorSize = 'h-1/2 w-1/2';
      break;
  }
  return (
    <>
      <span className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center"
          htmlFor={name}
        >
          <input
            checked={checked}
            name={name}
            onClick={(e: any) => handleChange(e)}
            type="radio"
            className={`peer ${inputSize} cursor-pointer appearance-none rounded-full border border-primary checked:border-primary-dark`}
          />
          <span
            className={`absolute left-1/2 top-1/2 ${indicatorSize} -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary opacity-0 transition-opacity duration-200 peer-checked:opacity-100`}
          ></span>
        </label>
        <span className="mx-2">{label}</span>
      </span>
    </>
  );
};

export default RadioButton;
