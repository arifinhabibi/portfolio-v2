const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Make sure the path is correct for NextUI
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#074173",
        secondary: "#76ABAE",
        danger: "#e74c3c",
        dark: "#272727",
        success: "#16423C",
        info: "#4CA9FF",
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"], // Corrected to 'sans' and ensured proper naming
      },
    },
  },
  darkMode: "class", // Optional: "media" can be used if you want to auto-toggle based on system preference
  plugins: [
    nextui({
      defaultTheme: "light", // Example setting to use the NextUI dark theme by default (optional)
    }),
  ],
};
