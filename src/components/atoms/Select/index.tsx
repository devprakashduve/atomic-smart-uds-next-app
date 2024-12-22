import React, { useState } from 'react';
import { SelectProps } from './SelectProps.interface';
import './Select.css';

const Select: React.FC<SelectProps> = ({ options, defaultValue='Select an option', onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onChange(event);
    };

    return (
        <label>
              {/* <span className="visually-hidden">Select an option</span> */}
            <select value={selectedValue} onChange={(event)=>{handleChange(event)}} className="select-base">
            <option value="" disabled>
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;