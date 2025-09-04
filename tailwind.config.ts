import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        primary: "#001616",          // deep dark greenish-black
        "primary-dark": "#000d0d",   // near black
        "primary-light": "#0a7272",  // teal
        "primary-lighter": "#07abab",// aqua
        secondary: "#23f597",        // neon mint
        accent: "#00E5FF", 
      }
    },
  },
  plugins: [],
};
export default config;
