module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,jpg,css,png,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};