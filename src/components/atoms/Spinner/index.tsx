import React from 'react';
import { SpinnerProps } from './SpinnerProps.interface';
import './Spinner.css';

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = 'currentColor' }) => {
    return (
        <div className="spinner">
        <div className="spinner-circle"></div>
      </div>
    );
};

export default Spinner;