export interface InputProps {
  value: string;
  name: string;
  onChange: (e: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type: 'text' | 'password' | 'number' | 'email' | 'tel';
  label?: string;
  id?: string;
  customClassNames?: string;
  size: 'sm' | 'md' | 'lg';
  isRequired?: boolean;
  rounded?: boolean;
  roundedFull?: boolean;
  title?: string;
}
