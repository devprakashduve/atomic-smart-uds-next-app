export interface RadioButtonProps {
  initialChecked?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
  disabled?: boolean;
  id?: string;
  labelClassNames?: string;
}
