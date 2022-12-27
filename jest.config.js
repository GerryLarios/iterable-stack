'use strict';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testTimeout: 30000,
  collectCoverageFrom: ['src/**/*.ts'],
  modulePathIgnorePatterns: ['./build'],
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
