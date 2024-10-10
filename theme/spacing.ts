import { Spacing } from "./types";

const SPACING_DEFAULT = 4;
const spacingCalculator = (value: number) => `${SPACING_DEFAULT * value}px`;

export const spacing: Spacing = {
  px: spacingCalculator(1),
  0: spacingCalculator(0),
  1: spacingCalculator(1),
  2: spacingCalculator(2),
  3: spacingCalculator(3),
  4: spacingCalculator(4),
  5: spacingCalculator(5),
  6: spacingCalculator(6),
  7: spacingCalculator(7),
  8: spacingCalculator(8),
  9: spacingCalculator(9),
  10: spacingCalculator(10),
};
