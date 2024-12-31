export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  name: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
}
