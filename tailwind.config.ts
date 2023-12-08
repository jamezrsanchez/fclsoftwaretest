import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#1f1f1f',
        brown: '#6e5634', 
      },
    },
  },
  plugins: [],
} satisfies Config;
