const

	webpackNodeExternals = require('webpack-node-externals'),

	pluginProposalObjectRestSpread = require('@babel/plugin-proposal-object-rest-spread'),

	/** Babel config */

	babelLoaderConfig = {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		options: {
			presets: [
				'@babel/preset-env',
				'@babel/preset-react'
			],
			plugins: [
				pluginProposalObjectRestSpread
			]
		}
	};

module.exports = [
	{
		target: 'web',
		entry: `${__dirname}/client.js`,
		output: {
			path: `${__dirname}/distribution`,
			filename: 'client.bundler.js'
		},
		module: {
			rules: [
				babelLoaderConfig
			]
		},
		resolve: {
			extensions: [
				'.js',
				'.jsx'
			],
			alias: {
				'react-br-client': `${__dirname}/temporary/ReactBRClient`
			}
		},
		devtool: 'source-map'
	},
	{
		target: 'node',
		entry: `${__dirname}/server.js`,
		output: {
			path: `${__dirname}/distribution`,
			filename: 'server.bundler.js'
		},
		module: {
			rules: [
				babelLoaderConfig
			]
		},
		externals: [
			webpackNodeExternals()
		],
		resolve: {
			extensions: [
				'.js',
				'.jsx'
			],
			alias: {
				'react-br-server': `${__dirname}/temporary/ReactBRServer.js`
			}
		},
		devtool: 'source-map'
	}
];
