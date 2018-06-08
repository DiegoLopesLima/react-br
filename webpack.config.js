const

	webpackNodeExternals = require('webpack-node-externals'),

	pluginProposalObjectRestSpread = require('@babel/plugin-proposal-object-rest-spread'),

	path = require('path');

module.exports = [
	{
		target: 'node',
		entry: path.join(__dirname, 'server.js'),
		output: {
			path: path.join(__dirname, 'distribution'),
			filename: 'node.bundler.js'
		},
		module: {
			rules: [
				{
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
				}
			]
		},
		externals: [
			webpackNodeExternals()
		],
		resolve: {
			extensions: [
				'.js',
				'.jsx'
			]
		}
	}/*,
	{
		target: 'web'
	}*/
];
