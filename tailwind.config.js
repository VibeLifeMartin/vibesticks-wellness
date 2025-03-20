import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".btn": {
          padding: "8px 16px",
          borderRadius: "8px",
          fontWeight: "bold",
          backgroundColor: "#4F46E5",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#4338CA",
          },
        },
      });
    }),
  ],
};

export default config;
