module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: 'standard-with-typescript',
	overrides: [
		{
			files: ['tests/**/*'],
			env: {
				jest: true
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/indent': [
			'error',
			'tab'
		],
		'no-tabs': 'off'
	}
}
