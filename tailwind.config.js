/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#e0e0e0",
        card: "#1a1a1a",
        border: "#2a2a2a",
        input: "#2a2a2a",
        primary: {
          DEFAULT: "#f59e0b", // Gold
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#22d3ee", // Cyan/Green
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#f59e0b", // Gold accent
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#7f1d1d",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#a3a3a3",
        },
      },
    },
  },
  plugins: [],
};

