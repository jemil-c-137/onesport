import type { Config } from 'jest'

const config: Config = {
    verbose: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.ts',
        '@/shared(.*)$': '<rootDir>/src/shared/$1'
    },
    modulePaths: ['<rootDir>src']
}

export default config
