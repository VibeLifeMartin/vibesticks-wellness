/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5", // Vibrant blue for the theme
          secondary: "#22D3EE", // Cyan for contrast
          background: "#F9FAFB", // Light gray background
          dark: "#1E293B", // Dark text color
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };
  