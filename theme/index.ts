import { CustomTheme } from './types';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { padding } from './padding';
import { keyframes } from './keyframes';
import { animation } from './animation';
import { borders } from './borders';

export const theme: CustomTheme = {
  colors,
  spacing,
  extend: {
    animation,
    keyframes,
    padding,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    borderWidth: borders.border,
    borderRadius: borders.borderRadius,
  },
};
