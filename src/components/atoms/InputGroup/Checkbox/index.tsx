import React from 'react';
import { CheckboxProps } from './CheckboxProps.interface';
import './../../../../app/globals.css';
import './Checkbox.css';

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <>
      <label className="block font-bold text-gray-500 md:w-2/3">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">Send me your newsletter!</span>
      </label>
    </>
  );
};

export default Checkbox;
