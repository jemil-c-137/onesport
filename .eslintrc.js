module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ["**/*.tsx"],  // Adjust the pattern based on your component file naming or location
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'i18next/no-literal-string': 2
      }
    },
    {
      files: ['**/src/**/*.test.{tsx,ts}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'tsconfig.node.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  globals: {
    _IS_DEV_: true,
  },
}
