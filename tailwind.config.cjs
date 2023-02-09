/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      gray: {
        100: '#ffffff',
        200: '#f1f2f6',
        300: '#dfe4ea',
        400: '#ced6e0',
        500: '#a4b0be',
        600: '#747d8c',
        700: '#57606f',
        800: '#2f3542'
      },
      red: {
        100: '#ff6b81',
        200: '#ff4757'
      },
      orange: {
        100: '#ff7f50',
        200: '#ff6348'
      },
      yellow: {
        100: '#eccc68',
        200: '#ffa502'
      },
      green: {
        100: '#7bed9f',
        200: '#2ed573'
      },
      blue: {
        100: '#70a1ff',
        200: '#1e90ff'
      },
      purple: {
        100: '#5352ed',
        200: '#3742fa'
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
