export default {
	packagerConfig: {
		name: "Deemix",
		asar: true,
		prune: false,
		ignore: [
			/^\/node_modules/,
			/^\/out/,
			/^\/src/,
			/^\/public/,
			/^\/scripts/,
			/^\/.gitignore/,
			/^\/forge.config.js/,
			/^\/tsconfig.json/,
		],
		icon: "./build/icon.ico",
		executableName: "deemix-gui",
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {},
		},
		{
			name: "@electron-forge/maker-zip",
			config: {},
		},
		{
			name: "@electron-forge/maker-deb",
			config: {
				options: {
					name: "deemix",
					productName: "Deemix",
					section: "sound",
					icon: "./build/icon.ico",
					categories: ["Audio"],
				},
			},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {
				options: {
					name: "deemix",
					productName: "Deemix",
					summary: "A standalone electron app that wraps deemix-webui",
					icon: "./build/64x64.png",
					categories: ["AudioVideo", "Audio"],
				},
			},
		},
	],
	plugins: [
		{
			name: "@electron-forge/plugin-auto-unpack-natives",
			config: {},
		},
	],
};
