import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#e8e9e9",
          secondary: "#CCDEF3",
          info: "#8FC2FD",
          accent: "#3E7992",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },

  plugins: [require("daisyui")],
};
export default config;

// #e8e9e9 braanco do fundo
// 8FC2FD azul navbar
// 6796CD azul texto
// CCDEF3 azul bg do card
// 3E7992 azul do fundo da tecnologias
