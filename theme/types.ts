import { Config } from "tailwindcss";

export interface ColorShades {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Colors
  extends Omit<
    NonNullable<Config["theme"]>["colors"],
    "blue" | "red" | "green" | "yellow" | "neutral"
  > {
  blue: ColorShades;
  red: ColorShades;
  green: ColorShades;
  yellow: ColorShades;
  neutral: ColorShades;
}

export interface FontFamily {
  sans: string[];
  serif: string[];
  mono: string[];
}

export interface FontSizeProps {
  fontSize: string;
  lineHeight: string;
}

export interface FontSize {
  xs: FontSizeProps;
  sm: FontSizeProps;
  base: FontSizeProps;
  lg: FontSizeProps;
  xl: FontSizeProps;
}

export interface Typography {
  fontFamily: FontFamily;
  fontSize: FontSize;
}

export interface KeyframeDefinition {
  [percentage: string]: {
    opacity?: string;
    transform?: string;
  };
}

export interface Keyframes {
  fadeIn: KeyframeDefinition;
  fadeOut: KeyframeDefinition;
  press: KeyframeDefinition;
}

export interface Animations {
  fadeIn: string;
  fadeOut: string;
  press: string;
}

export interface CustomTheme extends Omit<Config["theme"], "extend"> {
  colors: Colors;
  spacing: Spacing;
  extend: {
    typography: Typography;
    borders: Borders;
    padding: Padding;
    keyframes: Keyframes;
    animation: Animations;
  };
}

export interface Spacing {
  px: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

export interface GeneralPadding {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface SpecificPadding {
  button: string;
}

export interface Padding extends GeneralPadding, SpecificPadding {}

export interface Border {
  sm: string;
  md: string;
  lg: string;
}

export interface BorderRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Borders {
  border: Border;
  borderRadius: BorderRadius;
}
