import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "palette-foggy": "#6A6A6A",
        "palette-hof": "#222222",
        "palette-bobo": "#B0B0B0",
        "palette-deco": "#DDDDDD",
        "palette-bebe": "#EBEBEB",
        "brand-color": "#FF385C",
      },
    },
  },
  plugins: [],
};
export default config;
