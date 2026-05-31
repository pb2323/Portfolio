/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      ink: {
        50: "#fafaf9",
        100: "#f4f4f3",
        200: "#e5e5e3",
        300: "#c8c8c4",
        400: "#9b9ba0",
        500: "#6b6b73",
        600: "#3f3f47",
        700: "#27272f",
        800: "#18181d",
        900: "#0d0d10",
        950: "#08080a",
      },
      accent: {
        DEFAULT: "#7c5cff",
        muted: "#5a3df0",
        glow: "#a78bfa",
        cyan: "#22d3ee",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
    },
    screens: {
      xs: "450px",
    },
    keyframes: {
      "fade-up": {
        "0%": { opacity: 0, transform: "translateY(12px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "pulse-dot": {
        "0%, 100%": { opacity: 1, transform: "scale(1)" },
        "50%": { opacity: 0.6, transform: "scale(0.85)" },
      },
      "shimmer": {
        "0%": { backgroundPosition: "-200% 0" },
        "100%": { backgroundPosition: "200% 0" },
      },
      "aurora": {
        "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
        "33%": { transform: "translate(30px,-20px) rotate(8deg)" },
        "66%": { transform: "translate(-20px,30px) rotate(-8deg)" },
      },
      "marquee": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
    animation: {
      "fade-up": "fade-up 0.6s ease-out both",
      "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      "shimmer": "shimmer 3s linear infinite",
      "aurora": "aurora 18s ease-in-out infinite",
      "marquee": "marquee 40s linear infinite",
    },
  },
};
export const plugins = [];
