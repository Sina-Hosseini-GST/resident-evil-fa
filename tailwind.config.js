const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        fontFamily: {
          'c': ['calibri', 'sans-serif'],
          'c-2': ['b-mitra']
        },
        lineHeight: {
          'c': '1.66rem',
          'c-2': '2.33rem',
          'c-3': '2rem',
        },
        fontSize: {
          'c': '1.15625rem',
          'c-2': '1.25rem'
        },
        letterSpacing: {
          'c': '.0982rem',
          'c-2': '0'
        },
        colors: {
          'c-red': 'red',
          'c-red-2': 'tomato',
          'c-yellow': 'yellow',
          'c-yellow-2': '#ffffaf',
          'c-green': 'limegreen',
          'c-gray': '#d2d2d2',
          'c-gray-2': '#7e7e7e',
          'c-gray-3': '#3c3c3c',
          'c-gray-4': '#232323',
          'c-gray-5': '#1b1b1b',
          'c-gray-6': '#202020',
          'c-gray-7': '#404040',
          'c-gray-8': '#0d0d0d',
          'c-blue': 'blue',
          'c-blue-2': 'aqua',
          'c-blue-3': 'dodgerblue',
          'c-purple': 'magenta',
          'c-purple-2': 'darkviolet',
        },
        spacing: {
          'c': '40rem',
          'c-2': '18.75rem'
        },
        maxWidth: {
          'c': '40rem'
        },
        minWidth: {
          'c': '.75rem',
        },
        content: {
          'c': "'|'",
        }
      },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('not-last-child', ['&:not(:last-child)'])
    })
  ],
}