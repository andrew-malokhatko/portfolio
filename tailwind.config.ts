import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'border-dark' : "var(--border-dark)",
        'background-secondary' : "var(--background-secondary)",
        'text-shadow' : "var(--text-shadow)",
        'foreground-secondary' : "var(--foreground-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
