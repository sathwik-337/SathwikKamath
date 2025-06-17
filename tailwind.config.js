/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
     }
}

