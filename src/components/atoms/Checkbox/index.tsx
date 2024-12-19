import React from 'react';
import { CheckboxProps } from './CheckboxProps.interface';
import './Checkbox.css';

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <label className="checkbox-label">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                className="checkbox-input"
            />
            {label}
        </label>
    );
};

export default Checkbox;