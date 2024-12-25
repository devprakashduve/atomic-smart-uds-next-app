export interface TypographyProps {
  content: string; // The text content to be displayed
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'overline' | 'button'; // Type of typography
  size?: 'small' | 'medium' | 'large'; // Optional size for the typography
  weight?: 'light' | 'normal' | 'bold'; // Optional weight for the typography
  color?: string; // Optional color for the typography
  align?: 'left' | 'center' | 'right'; // Optional text alignment
}
