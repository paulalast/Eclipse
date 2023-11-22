/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".5rem",
				margin: "1rem",
			},
			colors: {
				main: "#F0F2F8",
				main: "#C4A657",
				main: "#9D6556",
				main: "#D9C0A2",
				lighter: "#A1AEB7",
				white: "#ffffff",
				dark: "#001D3D",
				dark: "#131313",
	
			},
			fontFamily: {
				headerFont: ["Petit Formal Script", "cursive"],
				headerFont: ["Cormorant Garamound", "serif"],
				mainFont: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
}
