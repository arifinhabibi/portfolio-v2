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
      boxShadow: {
        "top-primary":
          "0 -10px 20px 2px rgba(133, 15, 141, 0.3), 0 -4px 6px -4px rgba(133, 15, 141, 0.3)",
        "bottom-primary":
          "0 10px 20px 3px rgba(133, 15, 141, 0.3), 0 4px 6px -4px rgba(133, 15, 141, 0.3)",
        "top-light":
          "0 -10px 20px 2px rgba(255, 255, 255, 0.3), 0 -4px 6px -4px rgba(255, 255, 255, 0.3)",
        "bottom-light":
          "0 10px 20px 3px rgba(255, 255, 255, 0.3), 0 4px 6px -4px rgba(255, 255, 255, 0.3)",
        "right-light":
          "10px -2px 20px 2px rgba(255, 255, 255, 0.3), 0 -4px 6px -14px rgba(255, 255, 255, 0.3)",
      },
      colors: {
        primary: "#850F8D",
        secondary: "#76ABAE",
        danger: "#e74c3c",
        dark: "#000000",
        success: "#16423C",
        info: "#4CA9FF",
        light: "#ffffff",
        darkBackground: "#1A1A1A", // Custom dark mode background
        darkText: "#E0E0E0", // Custom dark mode text
        darkPrimary: "#5A056B",
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
