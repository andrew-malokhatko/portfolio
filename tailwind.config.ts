import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Add your dynamic classes here
    'text-green-300',
    'text-yellow-300',
    'bg-blue-400',
    // Add any other classes that might be used dynamically
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background)) / <alpha-value>",
        foreground: "var(--foreground)",
        'border-dark' : "var(--border-dark)",
        'background-secondary' : "var(--background-secondary)", 
        'text-shadow' : "var(--text-shadow)",
        'foreground-secondary' : "var(--foreground-secondary)",
        'background-highlight' : "var(--background-highlight)",
        'background-delete' : "var(--background-delete)",
      },
    },
  },
  plugins: [],
};
export default config;
