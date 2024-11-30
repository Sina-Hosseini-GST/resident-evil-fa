/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			fontFamily: {
				'calibri': 'calibri',
				'b-mitra': 'b-mitra',
			},
			screens: {
				'xs': '480px'
			}
    },
  },
  plugins: [],
}

