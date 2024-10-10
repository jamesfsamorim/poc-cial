import { Border, BorderRadius, Borders } from './types';

const border: Border = {
  sm: '1px solid',
  md: '2px solid',
  lg: '4px solid',
};

const borderRadius: BorderRadius = {
  sm: '2px',
  md: '4px',
  lg: '8px',
  full: '30px',
};

export const borders: Borders = {
  border: border,
  borderRadius: borderRadius,
};
