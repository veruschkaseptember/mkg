import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#742365",
        secondary: "#B2639A",
        light: "#FDFCFA",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'laptop': '1366px',
        'xl': '1440px', // Match site max-width
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px', // Match site max-width
        },
      },
    },
  },
  plugins: [],
} satisfies Config;