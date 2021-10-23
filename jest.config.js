module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/*.test.js/',
    '/config/',
    '/test-utils/',
  ],
  projects: [
    {
      displayName: 'DOM',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/client/src/utils/test-utils.js'],
      // 'extensionsToTreatAsEsm': ['.jsx'],
      testMatch: ['<rootDir>/client/**/*.test.js?(x)'],
      setupFiles: ['dotenv/config'],
      modulePaths: ['/client/src/'],
      moduleDirectories: ['node_modules', 'client/src'],
      watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
      ],
      moduleFileExtensions: ['js'],
      moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/client/src/__mocks__/styleMock.js',
        '\\.(png|gif|ttf|eot|svg|mp3|jpg)$':
          '<rootDir>/client/src/__mocks__/fileMock.js',
      },
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/**/*.test.js?(x)'],
      transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
      setupFilesAfterEnv: ['<rootDir>/server/test-utils/suiteSetup.js'],
    },
  ],
};
