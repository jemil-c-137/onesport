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
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.ts'
    }
}

export default config
