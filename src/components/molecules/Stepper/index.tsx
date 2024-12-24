import React from 'react';
import { StepperProps } from './StepperProps.interface';
import './Stepper.css';

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className,
}) => {
  return (
    <div className={`stepper-container ${className || ''}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${
            index === currentStep
              ? 'current-step'
              : step.isComplete
                ? 'completed-step'
                : 'inactive-step'
          }`}
          onClick={() => onStepClick?.(index)}
        >
          <div className="step-icon">{index + 1}</div>
          <div className="step-label">{step.label}</div>
          {index < steps.length - 1 && <div className="step-connector" />}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
