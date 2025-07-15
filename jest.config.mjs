import { pathsToModuleNameMapper } from 'ts-jest';
import { readFileSync } from 'fs';
const tsconfig = JSON.parse(readFileSync('./tsconfig.test.json', 'utf-8'));
const { compilerOptions } = tsconfig;

export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(svg|jpg|png|gif|webp|ico)$': 'jest-transform-stub',
        ...pathsToModuleNameMapper(compilerOptions.paths ?? {}, {
            prefix: '<rootDir>/',
        }),
    },
    testMatch: ['**/*.test.ts?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
        '^.+\\.(svg|jpg|png|gif|webp|ico)$': 'jest-transform-stub',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/components/**/*.{ts,tsx}',
        '!src/components/**/index.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
};