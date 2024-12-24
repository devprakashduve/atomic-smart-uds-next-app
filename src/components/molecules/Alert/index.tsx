import React from 'react';
import './Alert.css';
import { AlertProps } from './AlertProps.interface';

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  dismissible = false,
  onClose,
}) => {
  const alertTypeClasses = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  return (
    <div
      className={`alert ${alertTypeClasses[type]} flex items-start rounded-md border-l-4 p-4 shadow-md`}
    >
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {dismissible && (
        <button
          onClick={onClose}
          className="ml-4 text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
