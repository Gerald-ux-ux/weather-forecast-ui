import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {},
      backgroundColor: {},
      borderColor: {
        primary: "#343434",
      },
    },
  },
  plugins: [require("rippleui")],
};
export default config;
