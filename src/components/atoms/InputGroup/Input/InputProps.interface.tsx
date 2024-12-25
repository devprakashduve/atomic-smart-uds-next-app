export interface InputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type: 'text' | 'password' | 'number' | 'email' | 'tel';
  label?: string;
  id?: string;
  customClassNames?: string;
}
