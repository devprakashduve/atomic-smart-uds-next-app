import type { Config } from 'tailwindcss';

const theme_1 = {
  primary: {
    light: '#B9FBC0',
    DEFAULT: '#34D399',
    dark: '#059669',
  },
  secondary: {
    light: '#FFD6E8',
    DEFAULT: '#FB7185',
    dark: '#9F1239',
  },
  accent: {
    light: '#FFEDD5',
    DEFAULT: '#F97316',
    dark: '#C2410C',
  },
  line: {
    light: '#e2e8f0', //slate-200
    DEFAULT: '#cbd5e1', // slate-300
    dark: '#94a3b8', // slate-400
  },
  letter: {
    light: '#94a3b8', // slate-400
    DEFAULT: '#334155', //slate-700
    dark: '#0f172a', // slate-700
  },
  neutral: '#E5E7EB',
  info: '#38BDF8',
  success: '#22C55E',
  warning: '#FACC15',
  error: '#EF4444',
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
      colors: theme_1,
      zIndex: {
        auto: 'auto', // Add a custom `z-auto` class
        '-9': '-9',  // Add a custom `z-[-9]` class
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
