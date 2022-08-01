module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    extends: [
      'plugin:import/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['unused-imports'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          bracketSpacing: true,
          trailingComma: 'all',
          jsxBracketSameLine: false,
          arrowParens: 'always',
          singleQuote: true,
          semi: true,
          endOfLine: 'auto',
          importOrder: [
            '^react$',
            '^[a-z\\-/]*$',
            '(^@material-ui|components|providers)',
            '(^[src/]*$|^[./]|^[../])',
            '',
          ],
          importOrderSeparation: false,
        },
      ],
      'no-console': 'warn',
      'no-eval': 'warn',
      'no-proto': 2,
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-duplicate-imports': 'error',
      'no-array-constructor': 'error',
      'prefer-object-spread': 'warn',
      'array-callback-return': 'warn',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: 'always',
          ObjectPattern: {
            multiline: true,
          },
          ImportDeclaration: 'never',
          ExportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
      'prefer-destructuring': 'warn',
      'prefer-template': 'warn',
      'template-curly-spacing': ['error', 'never'],
      'object-shorthand': ['error', 'always'],
      'react/display-name': 'off',
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'import/no-unresolved': 'off',
      'react/prop-types': ['off'],
    },
  };