import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#52A9FF",
      },
      backgroundColor: {},
      borderColor: {
        primary: "#343434",
        brand: "#11294D",
      },
    },
  },
  plugins: [require("rippleui")],
};
export default config;
