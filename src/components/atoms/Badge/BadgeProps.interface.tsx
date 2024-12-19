export interface BadgeProps {
    text: string;
    color?: string;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}