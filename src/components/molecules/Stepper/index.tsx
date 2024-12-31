import React, { useState } from 'react';
import { StepperProps } from './Stepper.interface';

const Stepper = ({ steps = 3, value = 1, onChange }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(value);

  const handleNext = () => {
    if (currentStep < steps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onChange?.(newStep);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onChange?.(newStep);
    }
  };

  return (
    <div className="w-full px-8 py-4">
      <div className="relative flex w-full items-center justify-between">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div
          className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps - 1)) * 100}%` }}
        ></div>
        {Array.from({ length: steps }, (_, index) => {
          const step = index + 1;
          const isActive = step <= currentStep;
          return (
            <div
              key={step}
              className={`relative z-10 grid h-10 w-10 place-items-center rounded-full font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-300 text-gray-900'
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
      <div className="mt-16 flex justify-between">
        <button
          className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Prev
        </button>
        <button
          className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleNext}
          disabled={currentStep === steps}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
