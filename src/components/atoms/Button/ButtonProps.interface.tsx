export interface ButtonProps {
  label: string;
  children: any;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'btn-primary' | 'btn-secondary';
  className?: string;
}
