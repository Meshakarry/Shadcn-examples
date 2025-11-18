/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,vue,js,jsx,html}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '2.5rem',
        },
        screens: {
          'xl': '1200px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
