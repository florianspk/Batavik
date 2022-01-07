module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
  transform: { ".*\\.(vue)$": "vue-jest" },
	collectCoverage: true,
	collectCoverageFrom: ["**/*.{ts,vue}", "!**/node_modules/**"],
	testPathIgnorePatterns : [
		"<rootDir>/helpers/portList.ts" 
	]
};
