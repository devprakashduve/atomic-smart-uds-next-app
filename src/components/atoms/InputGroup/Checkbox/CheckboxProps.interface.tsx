export interface CheckboxProps {
  checked: boolean;
  toggleChecked: (e: boolean) => void;
  label: string;
  size?: string;
}
