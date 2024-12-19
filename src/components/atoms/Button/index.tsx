import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
    // const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`btn-base ${variant} ${disabled ? 'btn-disabled' : ''}`}
        >
            {label}
        </button>
    );
};

export default Button;