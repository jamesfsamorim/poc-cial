import { Typography, FontFamily, FontSize } from './types';

const fontFamily: FontFamily = {
  sans: ['Inter', 'sans-serif'],
  serif: ['Merriweather', 'serif'],
  mono: ['Fira Code', 'monospace'],
};

const fontSize: FontSize = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  base: { fontSize: '1rem', lineHeight: '1.5rem' },
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
};

export const typography: Typography = {
  fontFamily,
  fontSize,
};
