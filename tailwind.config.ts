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
        "palette-faint": "#F7F7F7",
        "brand-color": "#FF385C",
        "heart-fill-color": "rgba(0, 0, 0, 0.5)",
      },
    },
    screens: {
      xs: "400px",

      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "950px",
      // => @media (min-width: 768px) { ... }

      lg: "1128px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
