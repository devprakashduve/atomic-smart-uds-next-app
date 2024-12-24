import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stepper from '.';
import { StepperProps } from './StepperProps.interface';

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => {
  const [currentStep, setCurrentStep] = useState(args.currentStep);

  return (
    <Stepper
      {...args}
      currentStep={currentStep}
      onStepClick={(stepIndex) => setCurrentStep(stepIndex)}
    />
  );
};

export const DefaultStepper = Template.bind({});
DefaultStepper.args = {
  steps: [
    { label: 'Step 1', isComplete: true },
    { label: 'Step 2', isComplete: true },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
  currentStep: 2,
};
