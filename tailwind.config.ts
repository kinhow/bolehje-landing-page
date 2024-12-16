import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        pink: "var(--pink)",
        purple: "var(--purple)",
        gray: "var(--gray)",
        "dark-pink": "var(--dark-pink)",
        "dark-blue": "var(--dark-blue)",
        "light-purple": "var(--light-purple)",
        "dark-purple": "var(--dark-purple)",
        "light-blue": "var(--light-blue)",
        "lightness-blue": "var(--lightness-blue)",
        "light-gray": "var(--light-gray)",
        "lightness-gray": "var(--lightness-gray)"
      },
      fontFamily: {
        "alegreya-sans": "Alegreya Sans, sans-serif",
        "playfair-display": "Playfair Display, serif"
      }
    },
  },
  plugins: [],
};
export default config;
