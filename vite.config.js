export default {
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				privacy: "polityka-prywatnosci.html",
				404: "404.html",
				test: "test.html",
			},
		},
	},
}
