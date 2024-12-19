export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'btn-primary' | 'btn-secondary';
}