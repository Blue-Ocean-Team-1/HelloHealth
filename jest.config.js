module.exports = {
  projects: [
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      // "extensionsToTreatAsEsm": [".jsx"],
      testMatch: [
        '<rootDir>/client/**/*.test.js?(x)',
      ],
      // collectCoverage: true,
      // coverageReporters: [
      //   'json',
      //   'html',
      //   'lcov',
      // ],
      // setupFilesAfterEnv: [
      //   '<rootDir>/server/test-utils/suiteSetup.js',
      //   '<rootDir>/client/test-utils/setupSuite.js',
      // ],
      // coveragePathIgnorePatterns: [
      //   '/node_modules/',
      //   '/*.test.js/',
      // ],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/server/**/*.test.js?(x)',
      ],
      // collectCoverage: true,
      // coverageReporters: [
      //   'json',
      //   'html',
      //   'lcov',
      // ],
      // setupFilesAfterEnv: [
      //   '<rootDir>/server/test-utils/suiteSetup.js',
      //   '<rootDir>/client/test-utils/setupSuite.js',
      // ],
      // coveragePathIgnorePatterns: [
      //   '/node_modules/',
      //   '/*.test.js/',
      // ],
    },
  ],
};
