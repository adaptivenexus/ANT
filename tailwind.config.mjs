/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "secondary-foreground": "var(--secondary-foreground)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
      },
      backgroundImage: {
        "primary-gradient-vertical": "var(--primary-gradient-vertical)",
        "primary-gradient-vertical-reverse":
          "var(--primary-gradient-vertical-reverse)",
        "primary-gradient-horizontal": "var(--primary-gradient-horizontal)",
        "primary-gradient-horizontal-reverse":
          "var(--primary-gradient-horizontal-reverse)",
        "secondary-gradient": "var(--secondary-gradient)",
        "about-box-shadow": "var(--about-box-shadow)",
        "border-gradient-about": "var(--border-gradient-about)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
