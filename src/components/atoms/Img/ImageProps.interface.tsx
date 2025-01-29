export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  customClassNames?: string;
  onError?: () => void;
}
