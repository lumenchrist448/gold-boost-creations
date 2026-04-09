import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0f",
        paper: "#f5f2eb",
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8cc7e",
          dim: "#7a6230",
        },
        muted: {
          DEFAULT: "#7a7468",
          foreground: "#7a7468",
        },
        card: {
          DEFAULT: "#111118",
          foreground: "#f5f2eb",
        },
        border: "rgba(201,168,76,0.25)",
        input: "#111118",
        ring: "#c9a84c",
        background: "#0a0a0f",
        foreground: "#f5f2eb",
        primary: {
          DEFAULT: "#c9a84c",
          foreground: "#0a0a0f",
        },
        secondary: {
          DEFAULT: "#111118",
          foreground: "#f5f2eb",
        },
        accent: {
          DEFAULT: "#c9a84c",
          foreground: "#0a0a0f",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        popover: {
          DEFAULT: "#111118",
          foreground: "#f5f2eb",
        },
        sidebar: {
          DEFAULT: "#111118",
          foreground: "#f5f2eb",
          primary: "#c9a84c",
          "primary-foreground": "#0a0a0f",
          accent: "#111118",
          "accent-foreground": "#f5f2eb",
          border: "rgba(201,168,76,0.25)",
          ring: "#c9a84c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
