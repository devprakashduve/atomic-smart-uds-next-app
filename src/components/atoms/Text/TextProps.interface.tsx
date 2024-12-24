export interface TextProps {
  content: string; // The content of the text element
  type?: 'normal' | 'heading' | 'subheading'; // Optional type to adjust styling
  size?: 'small' | 'medium' | 'large'; // Optional size for the text
  color?: string; // Optional color for the text
  weight?: 'light' | 'normal' | 'bold'; // Optional weight for the text
}
