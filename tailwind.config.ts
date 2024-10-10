import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { theme as horizonTheme } from './theme'

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./cypress/component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: horizonTheme,
  plugins: [animate],
} satisfies Config;