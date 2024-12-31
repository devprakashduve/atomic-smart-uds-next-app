export interface RadioButtonProps {
  initialChecked: boolean;
  onChange?: (value: boolean) => void;
  label: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
}
