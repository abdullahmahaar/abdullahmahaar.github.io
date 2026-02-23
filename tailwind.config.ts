import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
        },
        accent: {
          cyan: "var(--accent-cyan)",
          amber: "var(--accent-amber)",
          violet: "var(--accent-violet)",
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        border: "var(--border)",
      },
      boxShadow: {
        cyan: "var(--glow-cyan)",
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        noise: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0,245,212,0)" },
          "50%": { boxShadow: "0 0 40px rgba(0,245,212,0.25)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
