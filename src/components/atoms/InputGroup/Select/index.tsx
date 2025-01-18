import React, { useState } from 'react';
import { SelectProps } from './SelectProps.interface';
import './../../../../app/globals.css';
import './Select.css';

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue = 'Select an option',
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(event);
  };

  return (
    <>
      <div className="w-full min-w-[200px]">
        <div className="relative">
          <select
            aria-label="Select an option"
            value={selectedValue}
            onChange={(event) => {
              handleChange(event);
            }}
            className="ease w-full cursor-pointer appearance-none rounded border border-line-light bg-transparent py-2 pl-3 pr-8 text-sm shadow-sm transition duration-300 placeholder:text-letter-light hover:border-line-dark focus:border-line focus:shadow-md focus:outline-none"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            className="absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-line-dark"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Select;
