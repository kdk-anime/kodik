/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: 'node',
	coverageProvider: 'v8',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}]
	}
}
