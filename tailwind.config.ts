import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        runescape: ["RuneScape", "serif"],
      },
      colors: {
        "wildy-gold": "#FFD700",
        "wildy-dark": "#1a1a1a",
      },
    },
  },
  plugins: [],
} satisfies Config;
