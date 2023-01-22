/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode:"class",
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
	],
	theme: {
		fontFamily: {
			sans: ['Lato', 'system-ui', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				kanit: ['Kanit', 'system-ui', 'sans-serif'],
			},
		},
	},
	daisyui: {
		themes: [
			{
				movies: {
					primary: '#1e3a8a',
					secondary: '#312e81',
					accent: '#4c1d95',
					neutral: '#272626',
					'base-100': '#000000',
					info: '#0000FF',
					success: '#008000',
					warning: '#FFFF00',
					error: '#FF0000',
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('flowbite/plugin'),
		require('daisyui'),
		require('tailwind-scrollbar-hide'),
	],
}
