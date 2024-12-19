import React from 'react';
import { SpinnerProps } from './SpinnerProps.interface';
import './Spinner.css';

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = 'currentColor' }) => {
    return (
        <svg className="spinner-base" width={size} height={size} fill={color} viewBox="0 0 24 24">
            <circle className="spinner-path" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
    );
};

export default Spinner;