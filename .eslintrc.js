module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": "standard-with-typescript",
	"overrides": [],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		'@typescript-eslint/indent': [
			'error',
			'tab'
		],
		'no-tabs': 'off'
	}
}
