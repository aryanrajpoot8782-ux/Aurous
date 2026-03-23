/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#E8C547",
        "gold-dark": "#B8860B",
        "dark-bg": "#0A0E27",
        "dark-card": "#141829",
        "dark-border": "#2A2F4F",
        "neon-gold": "#FFD700",
        "neon-amber": "#FFA500",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1)",
        slideUp: "slideUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        slideDown: "slideDown 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
        glow: "glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        neon: "neon 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ripple: "ripple 0.6s cubic-bezier(0.4, 0, 0.6, 1)",
        "luxury-float": "luxuryFloat 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.2)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.7)" },
          "70%": { boxShadow: "0 0 0 15px rgba(212, 175, 55, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        neon: {
          "0%, 100%": { textShadow: "0 0 10px #D4AF37, 0 0 20px #D4AF37" },
          "50%": { textShadow: "0 0 20px #D4AF37, 0 0 30px #FFD700, 0 0 40px #FFA500" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        luxuryFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(1deg)" },
          "50%": { transform: "translateY(-30px) rotate(0deg)" },
          "75%": { transform: "translateY(-15px) rotate(-1deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5", boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 60px rgba(212, 175, 55, 0.6), 0 0 100px rgba(212, 175, 55, 0.3)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      boxShadow: {
        "luxury-sm": "0 4px 20px rgba(212, 175, 55, 0.1)",
        "luxury-md": "0 8px 40px rgba(212, 175, 55, 0.2)",
        "luxury-lg": "0 12px 60px rgba(212, 175, 55, 0.25)",
        "luxury-xl": "0 20px 100px rgba(212, 175, 55, 0.3)",
        "inner-glow": "inset 0 2px 20px rgba(212, 175, 55, 0.1)",
      },
    },
  },
  plugins: [],
}
