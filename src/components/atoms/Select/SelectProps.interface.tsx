export interface SelectProps {
    options: { value: string; label: string }[];
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}