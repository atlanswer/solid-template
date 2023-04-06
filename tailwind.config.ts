import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,css,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
