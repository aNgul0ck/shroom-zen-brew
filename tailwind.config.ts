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
        headline: ['Afronaut', 'Archivo', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        shroom: {
          cream: "hsl(var(--shroom-cream))",
          gold: "hsl(var(--shroom-gold))",
          sky: "hsl(var(--shroom-sky))",
          blush: "hsl(var(--shroom-blush))",
          magenta: "hsl(var(--shroom-magenta))",
          blue: "hsl(var(--shroom-blue))",
          pink: "hsl(var(--shroom-pink))",
          wine: "hsl(var(--shroom-wine))",
          sage: "hsl(var(--shroom-sage))",
          peach: "hsl(var(--shroom-peach))",
          lavender: "hsl(var(--shroom-lavender))",
          green: "hsl(var(--shroom-green))",
          coral: "hsl(var(--shroom-coral))",
          purple: "hsl(var(--shroom-purple))",
          black: "hsl(var(--shroom-black))",
        },
        diva: {
          pink: "hsl(var(--diva-pink))",
          red: "hsl(var(--diva-red))",
          purple: "hsl(var(--diva-purple))",
          dark: "hsl(var(--diva-dark))",
          foreground: "hsl(var(--diva-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "scroll-x": "scroll-x 25s linear infinite",
      },
      boxShadow: {
        soft: "0 4px 20px -4px hsl(150 20% 15% / 0.08)",
        card: "0 8px 30px -8px hsl(150 20% 15% / 0.1)",
        elevated: "0 20px 60px -15px hsl(150 20% 15% / 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
