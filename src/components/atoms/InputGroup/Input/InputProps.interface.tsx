export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type: 'text' | 'password' | 'number' | 'email' | 'tel';
  label: string;
  id?: string;
  name: string;
  className: string;
}
