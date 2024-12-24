export interface Step {
  label: string; // Label for the step
  isComplete?: boolean; // Indicates whether the step is complete
}

export interface StepperProps {
  steps: Step[]; // Array of steps
  currentStep: number; // Index of the current step (zero-based)
  onStepClick?: (stepIndex: number) => void; // Optional callback for when a step is clicked
  className?: string; // Optional additional className for the container
}
