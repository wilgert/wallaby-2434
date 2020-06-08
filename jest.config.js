// jest.config.js
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        '<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer',
      ],
    }
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node', '.html'],
  modulePathIgnorePatterns: ['dist', 'coverage'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/index.ts',
    '!src/environment/**',
    '!src/**/*.mock.ts',
    '!src/mocks/**',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 30,
      lines: 30,
      statements: 29,
    },
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/app/$1',
  },
};
