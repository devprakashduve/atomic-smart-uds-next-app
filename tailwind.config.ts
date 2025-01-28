import type { Config } from 'tailwindcss';

const colorPalette = {
  primary: {
    light: '#B9FBC0', // Soft Mint Green
    DEFAULT: '#34D399', // Green Teal
    dark: '#059669', // Deep Green
  },
  secondary: {
    light: '#FFD6E8', // Soft Pink
    DEFAULT: '#FB7185', // Vibrant Coral Pink
    dark: '#9F1239', // Deep Red
  },
  accent: {
    light: '#FFEDD5', // Soft Peach
    DEFAULT: '#F97316', // Orange
    dark: '#C2410C', // Deep Orange
  },
  line: {
    light: '#E2E8F0', // Slate-200
    DEFAULT: '#CBD5E1', // Slate-300
    dark: '#94A3B8', // Slate-400
  },
  letter: {
    light: '#94A3B8', // Slate-400
    DEFAULT: '#334155', // Slate-700
    dark: '#0F172A', // Slate-900
  },
  btn: {
    light: '#E2E8F0', // Slate-200
    DEFAULT: '#CBD5E1', // Slate-300
    dark: '#94A3B8', // Slate-400
  },
  neutral: '#E5E7EB', // Light Gray
  info: '#38BDF8', // Sky Blue
  success: '#22C55E', // Bright Green
  warning: '#FACC15', // Yellow
  error: '#EF4444', // Red
  complementary: {
    primaryComplement: '#D1345B', // Complementary to Green
    secondaryComplement: '#32BFB2', // Complementary to Coral Pink
    accentComplement: '#16A3F9', // Complementary to Orange
  },
  analogous: {
    primaryAnalogous1: '#34D3C1', // Teal-based Analogous
    primaryAnalogous2: '#34D36C', // Light Lime Green
  },
  triadic: {
    triadic1: '#D39934', // Triadic Color for Primary
    triadic2: '#9934D3', // Deep Purple contrasting triad
  },
};

const colorPalette2 = {
  primary: {
    light: '#A7F3D0', // Mint Green
    DEFAULT: '#10B981', // Emerald
    dark: '#064E3B', // Deep Green
  },
  secondary: {
    light: '#FBCFE8', // Pale Pink
    DEFAULT: '#EC4899', // Bright Pink
    dark: '#9D174D', // Dark Magenta
  },
  accent: {
    light: '#FDE68A', // Soft Yellow
    DEFAULT: '#F59E0B', // Amber
    dark: '#B45309', // Brownish Orange
  },
  line: {
    light: '#F1F5F9', // Slate-50
    DEFAULT: '#D1D5DB', // Slate-200
    dark: '#6B7280', // Slate-500
  },
  letter: {
    light: '#9CA3AF', // Cool Gray-400
    DEFAULT: '#1F2937', // Gray-800
    dark: '#111827', // Gray-900
  },
  btn: {
    light: '#E5E7EB', // Light Gray
    DEFAULT: '#9CA3AF', // Medium Gray
    dark: '#4B5563', // Dark Gray
  },
  neutral: '#F3F4F6', // Neutral Gray
  info: '#60A5FA', // Blue
  success: '#4ADE80', // Lime Green
  warning: '#FBBF24', // Orange Yellow
  error: '#DC2626', // Bright Red
  complementary: {
    primaryComplement: '#B91C1C', // Complementary to Emerald
    secondaryComplement: '#059669', // Complementary to Pink
    accentComplement: '#2563EB', // Complementary to Amber
  },
  analogous: {
    primaryAnalogous1: '#10B9A6', // Teal-Green
    primaryAnalogous2: '#10B94C', // Greenish Lime
  },
  triadic: {
    triadic1: '#B91073', // Magenta
    triadic2: '#0B10B9', // Deep Blue
  },
};
const darkPinkWhitePalette = {
  primary: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  secondary: {
    light: '#F5F5F5', // Soft White
    DEFAULT: '#FFFFFF', // Pure White
    dark: '#E5E5E5', // Light Grayish White
  },
  accent: {
    light: '#FDE8E8', // Light Rose
    DEFAULT: '#E11D48', // Crimson
    dark: '#BE123C', // Dark Red
  },
  line: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Deep Magenta
  },
  letter: {
    light: '#9CA3AF', // Gray (Slate-400)
    DEFAULT: '#1F2937', // Dark Charcoal (Slate-800)
    dark: '#111827', // Almost Black (Slate-900)
  },
  btn: {
    light: '#FBCFE8', // Light Pink
    DEFAULT: '#DB2777', // Dark Pink
    dark: '#9D174D', // Dark Magenta
  },
  neutral: '#F3F4F6', // Neutral Gray
  info: '#BFDBFE', // Soft Blue
  success: '#86EFAC', // Light Green
  warning: '#FDE047', // Yellow
  error: '#F87171', // Soft Red
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: darkPinkWhitePalette,
      zIndex: {
        auto: 'auto', // Add a custom `z-auto` class
        '-9': '-9', // Add a custom `z-[-9]` class
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '72': '18rem', // New spacing value
        '80': '20rem', // New spacing value
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '80px',
        '7xl': '96px', // New font size (7xl)
      },
      lineHeight: {
        DEFAULT: '1',
        normal: '1.5',
        relaxed: '1.75',
        snug: '1.25',
        tight: '1.1',
        loose: '2',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px', // Large border radius
        xl: '16px', // Extra large border radius
        '2xl': '24px', // 2x Extra large border radius
      },
      boxShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 20px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        spacing: 'margin, padding',
        colors: 'color, background-color, border-color',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // Custom breakpoints for more flexibility
        '3xl': '1800px', // Custom breakpoint for larger screens
      },
    },
  },
  plugins: [],
} satisfies Config;
