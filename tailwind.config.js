import { transform } from 'typescript';

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				sayHi: {
					'10%': {
						transform: 'rotate(10deg)'
					},
					'15%': {
						transform: 'rotate(15deg)'
					},
					'20%': {
						transform: 'rotate(20deg)'
					},
					'25%': {
						transform: 'rotate(25deg)'
					},
					'30%': {
						transform: 'rotate(30deg)'
					},
					'45%': {
						transform: 'rotate(45deg)'
					}
				}
			},
			animation: {
				sayHiHand: 'sayHi 2s infinite'
			},
		},
		screens: {
			xs: {
				min: '272px',
				max: '490px'
			},
			...defaultTheme.screens
		}
	},
	plugins: []
};
