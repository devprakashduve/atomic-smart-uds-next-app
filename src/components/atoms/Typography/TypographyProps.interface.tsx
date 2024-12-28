type ThemeColors = {
  primary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  secondary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  accent: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  neutral: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};

// Spacing
type ThemeSpacing = {
  '128': string;
  '144': string;
  '72': string;
  '80': string;
};

// Font Families
type ThemeFontFamily = {
  sans: string[];
  serif: string[];
  mono: string[];
};

// Font Sizes
type ThemeFontSize = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
};

// Line Heights
type ThemeLineHeight = {
  normal: string;
  relaxed: string;
  snug: string;
  tight: string;
  loose: string;
};

// Font Weights
type ThemeFontWeight = {
  light: string;
  normal: string;
  medium: string;
  bold: string;
  black: string;
};

// Border Radius
type ThemeBorderRadius = {
  lg: string;
  xl: string;
  '2xl': string;
};

// Box Shadows
type ThemeBoxShadow = {
  default: string;
  md: string;
  lg: string;
  xl: string;
};

// Transition Properties
type ThemeTransitionProperty = {
  width: string;
  height: string;
  spacing: string;
  colors: string;
};

// Screens
type ThemeScreens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
};

/**
 * Props for the Typography component.
 */
export interface TypographyProps {
  /**
   * The children to be displayed.
   */

  children: React.ReactNode;
  /**
   * The variant of the typography.
   * @default 'body'
   */
  variant?:
    | 'heading'
    | 'subheading'
    | 'body'
    | 'caption'
    | 'overline'
    | 'button';

  /**
   * The size of the typography, based on the theme's font sizes.
   */
  size?: ThemeFontSize;

  /**
   * The weight of the typography, based on the theme's font weights.
   */
  weight?: ThemeFontWeight;

  /**
   * The color of the typography, based on the theme's colors.
   */
  color?: ThemeColors;

  /**
   * The alignment of the text.
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Custom class names to apply to the typography component.
   */
  customClassNames?: string;
}
