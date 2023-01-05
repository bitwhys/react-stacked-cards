const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Visby CF', ...defaultTheme.fontFamily.sans],
        title: ['Regina', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
