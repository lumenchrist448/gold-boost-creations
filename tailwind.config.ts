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
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        ink: "#161316",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#FF6D29",
          light: "#FF8A52",
          dim: "#453027",
        },
        muted: {
          DEFAULT: "#BABABA",
          foreground: "#BABABA",
        },
        card: {
          DEFAULT: "#1E191B",
          foreground: "#FFFFFF",
        },
        border: "rgba(255, 109, 41,0.25)",
        input: "#1E191B",
        ring: "#FF6D29",
        background: "#161316",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#FF6D29",
          foreground: "#161316",
        },
        secondary: {
          DEFAULT: "#1E191B",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF6D29",
          foreground: "#161316",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 100%)",
        },
        popover: {
          DEFAULT: "#1E191B",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#1E191B",
          foreground: "#FFFFFF",
          primary: "#FF6D29",
          "primary-foreground": "#161316",
          accent: "#1E191B",
          "accent-foreground": "#FFFFFF",
          border: "rgba(255,109,41,0.25)",
          ring: "#FF6D29",
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
