module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  "coverageReporters": ["text", "html"],
  "collectCoverage": true,
  "collectCoverageFrom": ['src/**/*.{ts,tsx,vue}'],
};
