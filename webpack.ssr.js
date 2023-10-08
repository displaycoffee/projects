const path = require('path');
const nodeExternals = require('webpack-node-externals');

// Path config
const themePath = './assets/';
const webpPathConfig = {
	path: path.resolve(__dirname),
	src: {
		client: themePath + 'ssr/Client.jsx',
		server: themePath + 'ssr/server.js',
	},
	dist: {
		client: themePath + 'dist/ssr/client.js',
		server: themePath + 'dist/ssr/server.js',
	},
};

const sharedModuleRules = {
	rules: [
		{
			test: /\.?jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		},
	],
};

module.exports = (env) => {
	if (env.client) {
		return {
			entry: webpPathConfig.src.client,
			output: {
				filename: webpPathConfig.dist.client,
				path: webpPathConfig.path,
			},
			module: sharedModuleRules,
		};
	}

	return {
		target: 'node',
		entry: webpPathConfig.src.server,
		output: {
			filename: webpPathConfig.dist.server,
			path: webpPathConfig.path,
		},
		externals: nodeExternals(),
		module: sharedModuleRules,
	};
};
