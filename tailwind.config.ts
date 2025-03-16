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
        "primary":"#102B51",
        "goldss":"#D39C49",
        "blue":"#4161E5",
        "blue-darker":"#0D132E",
        "sky-blue":"#F1F4FF",
        "typo":"#5c6c7b",
        "gold": "#E8AF62"
      },
    },
  },
  plugins: [],
};
export default config;
