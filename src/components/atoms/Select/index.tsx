import React from 'react';
import { SelectProps } from './SelectProps.interface';
import './Select.css';

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    return (
        <select value={value} onChange={onChange} className="select-base">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;