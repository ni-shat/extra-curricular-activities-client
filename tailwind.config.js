/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary":  "#DC2626",
          // "neutral": "#ffffff",
          "secondary": "#4b5563",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}