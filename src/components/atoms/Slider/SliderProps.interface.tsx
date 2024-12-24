export interface SliderProps {
  min: number; // Minimum value of the slider
  max: number; // Maximum value of the slider
  value: number; // Current value of the slider
  step?: number; // The step for the slider (optional)
  onChange: (value: number) => void; // Callback when the value changes
  color?: string; // Optional color for the slider track and thumb
  disabled?: boolean; // Optional flag to disable the slider
}
