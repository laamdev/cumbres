const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
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
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "branding-white": {
          DEFAULT: "#faf5eb",
          50: "#faf5eb",
          100: "#f7efdd",
          200: "#eddcbb",
          300: "#e2c28f",
          400: "#d5a362",
          500: "#cc8a43",
          600: "#be7538",
          700: "#9e5c30",
          800: "#7f4b2d",
          900: "#673e27",
          950: "#371f13",
        },
        "branding-green": {
          DEFAULT: "#1e3c32",
          50: "#f3faf6",
          100: "#d7f0e4",
          200: "#aee1c9",
          300: "#7ecaaa",
          400: "#53ae8b",
          500: "#399371",
          600: "#2c755c",
          700: "#265f4b",
          800: "#224d3f",
          900: "#1e3c32",
          950: "#0e251f",
        },
        "branding-sand": {
          DEFAULT: "#dcb496",
          50: "#fbf6f1",
          100: "#f5eadf",
          200: "#ead2be",
          300: "#dcb496",
          400: "#cd8f6a",
          500: "#c2734d",
          600: "#b46042",
          700: "#964b38",
          800: "#793f33",
          900: "#62362c",
          950: "#341a16",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
