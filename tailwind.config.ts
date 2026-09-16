import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        cyan: "var(--color-cyan)",
        cyanText: "var(--color-cyan-text)",
        blue: "var(--color-blue)",
        red: "var(--color-red)",
        background: "var(--color-background)",
        surfaceDark: "var(--color-surface-dark)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(3, 11, 31, 0.06), 0 1px 12px rgba(3, 11, 31, 0.04)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
