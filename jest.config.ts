/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = { testEnvironment: 'jsdom',
testPathIgnorePatterns: ['/node_modules/', '/.next/'],
collectCoverage: true,
collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
modulePaths: ['<rootDir>/src/']
};

export default config;
