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
        ink: "#050505",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#FF4526",
          light: "#FF7355",
          dim: "#2A1411",
        },
        muted: {
          DEFAULT: "#9C9C9C",
          foreground: "#9C9C9C",
        },
        card: {
          DEFAULT: "#0E0D0D",
          foreground: "#FFFFFF",
        },
        border: "rgba(255,255,255,0.08)",
        input: "#0E0D0D",
        ring: "#FF4526",
        background: "#050505",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FF4526",
          foreground: "#050505",
        },
        secondary: {
          DEFAULT: "#0E0D0D",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF4526",
          foreground: "#050505",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        popover: {
          DEFAULT: "#0E0D0D",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#0E0D0D",
          foreground: "#FFFFFF",
          primary: "#FF4526",
          "primary-foreground": "#050505",
          accent: "#0E0D0D",
          "accent-foreground": "#FFFFFF",
          border: "rgba(255,255,255,0.08)",
          ring: "#FF4526",
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
