import { spacing } from "./spacing";
import { GeneralPadding, SpecificPadding, Padding } from "./types";

const generalPadding: GeneralPadding = {
  xs: `${spacing[1]} ${spacing[1]}`,
  sm: `${spacing[2]} ${spacing[2]}`,
  md: `${spacing[4]} ${spacing[4]}`,
  lg: `${spacing[6]} ${spacing[6]}`,
};

const specificPadding: SpecificPadding = {
  button: `${spacing[4]} ${spacing[6]}`,
};

export const padding: Padding = {
  ...generalPadding,
  ...specificPadding,
};
