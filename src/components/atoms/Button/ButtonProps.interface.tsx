export interface ButtonProps {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  variant: string;
  rounded?: boolean;
  roundedFull?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLink?: boolean;
  customClassNames?: string;
}
