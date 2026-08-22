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
        sans: ["Hanken Grotesk", "sans-serif"],
        poppins: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        ink: "#060B0A",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#2BFFF8",
          light: "#B0FCCE",
          dim: "#04241A",
        },
        muted: {
          DEFAULT: "#9C9C9C",
          foreground: "#9C9C9C",
        },
        card: {
          DEFAULT: "#0C1512",
          foreground: "#FFFFFF",
        },
        border: "rgba(255,255,255,0.08)",
        input: "#0C1512",
        ring: "#2BFFF8",
        background: "#060B0A",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#2BFFF8",
          foreground: "#060B0A",
        },
        secondary: {
          DEFAULT: "#0C1512",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2BFFF8",
          foreground: "#060B0A",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        popover: {
          DEFAULT: "#0C1512",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#0C1512",
          foreground: "#FFFFFF",
          primary: "#2BFFF8",
          "primary-foreground": "#060B0A",
          accent: "#0C1512",
          "accent-foreground": "#FFFFFF",
          border: "rgba(255,255,255,0.08)",
          ring: "#2BFFF8",
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
