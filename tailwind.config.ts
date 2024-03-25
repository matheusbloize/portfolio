import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        clash: ["Clash Grotesk", "system-ui"],
        general: ["General Sans", "system-ui"],
      },
      colors: {
        "mb-base": "#F1E7DB",
        "mb-black": "#131315",
        "mb-white": "#FBFAFB",
        "mb-green": "#5BDE0A",
      },
      fontSize: {
        128: "8em",
        120: "7.5em",
        96: "6em",
        94: "5.875em",
        64: "4em",
        48: "3em",
        36: "2.25em",
        32: "2em",
        24: "1.5em",
        20: "1.25em",
        16: "1em",
        14: "0.875em",
        12: "0.75em",
      },
      lineHeight: {
        ".5em": ".5em",
        "1em": "1em",
        "1.5em": "1.5em",
      },
      keyframes: {
        nav: {
          "0%, 100%": {
            scale: "1",
          },
          "50%": {
            scale: "1.5",
          },
        },
      },
      animation: {
        nav: "nav .5s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
