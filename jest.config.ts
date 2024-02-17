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
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '@/shared(.*)$': '<rootDir>/src/shared/$1'
    },
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src']
}

export default config
