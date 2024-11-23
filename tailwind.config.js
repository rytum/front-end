/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px'
	},
	extend: {
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
			'color-1': 'hsl(var(--color-1))',
			'color-2': 'hsl(var(--color-2))',
			'color-3': 'hsl(var(--color-3))',
			'color-4': 'hsl(var(--color-4))',
			'color-5': 'hsl(var(--color-5))',
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		backgroundImage: {
			'custom-gradient': 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)',
			'chat-bg-soft-blue': 'linear-gradient(120deg, #e0f2fe 0%, #ffffff 100%);',
			'chat-bg-gentle-green': 'linear-gradient(120deg, #d1fae5 0%, #ffffff 100%);',
			'chat-bg-warm-peach': 'linear-gradient(120deg, #fef3c7 0%, #ffffff 100%);',
			'chat-bg-cool-purple': 'linear-gradient(120deg, #ede9fe 0%, #ffffff 100%);'
		},
		animation: {
			rainbow: 'rainbow var(--speed, 2s) infinite linear',
			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
		},
		keyframes: {
			rainbow: {
				'0%': {
					'background-position': '0%'
				},
				'100%': {
					'background-position': '200%'
				}
			},
			'shimmer-slide': {
				to: {
					transform: 'translate(calc(100cqw - 100%), 0)'
				}
			},
			'spin-around': {
				'0%': {
					transform: 'translateZ(0) rotate(0)'
				},
				'15%, 35%': {
					transform: 'translateZ(0) rotate(90deg)'
				},
				'65%, 85%': {
					transform: 'translateZ(0) rotate(270deg)'
				},
				'100%': {
					transform: 'translateZ(0) rotate(360deg)'
				}
			},
			'border-beam': {
				'100%': {
					'offset-distance': '100%'
				}
			}
		}
	}
},
plugins: [require("tailwindcss-animate")],
};