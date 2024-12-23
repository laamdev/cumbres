import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
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
          DEFAULT: "#133426",
          50: "#f0f9f4",
          100: "#daf1e1",
          200: "#b8e2c8",
          300: "#8acba7",
          400: "#58af81",
          500: "#379265",
          600: "#26754f",
          700: "#1f5d42",
          800: "#1a4b35",
          900: "#133426",
          950: "#0c2219",
        },
        "branding-yellow": {
          DEFAULT: "#e5a958",
          50: "#fdf9ef",
          100: "#faf0da",
          200: "#f4deb4",
          300: "#edc784",
          400: "#e5a958",
          500: "#de8d31",
          600: "#cf7527",
          700: "#ac5b22",
          800: "#8a4922",
          900: "#6f3d1f",
          950: "#3c1e0e",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
