/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        bone: "#F7F5F0",
        "hyper-lime": "#CCFF00",
        "electric-purple": "#6600FF",
      },
      fontFamily: {
        archivo: ['"Archivo Black"', 'sans-serif'],
        space: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '6px 6px 0px 0px #000000',
        'brutal-hover': '2px 2px 0px 0px #000000',
        'brutal-deep': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      }
    },
  },
  plugins: [],
}
