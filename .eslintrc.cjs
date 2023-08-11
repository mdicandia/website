/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'import', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    /** This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. */
    'no-alert': 'error',
    /** This rule disallows calls to methods of the console object. */
    'no-console': 'off',
    /** This rule requires that all imports from a single module exists in a single import statement. */
    'no-duplicate-imports': 'error',
    /** This rule aims to eliminate assignments from return statements. As such, it will warn whenever an assignment is found as part of return. */
    'no-return-assign': 'error',
    /** This rule flags escapes that can be safely removed without changing behavior. */
    'no-useless-escape': 'warn',
    /** This rule is aimed at discouraging the use of var and encouraging the use of const or let instead. */
    'no-var': 'error',
    /** ECMAScript 6 provides a concise form for defining object literal methods and properties. This syntax can make defining complex object literals much cleaner */
    'object-shorthand': ['warn', 'always', { avoidExplicitReturnArrows: true }],
    /** This rule enforces variables to be declared either together or separately per function ( for var) or block (for let and const) scope. */
    'one-var': ['error', { let: 'never', const: 'never' }],
    /** This rule is aimed at flagging variables that are declared using let keyword, but never reassigned after the initial assignment. */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    /** This rule is aimed to flag usage of arguments variables. */
    'prefer-rest-params': 'error',
    // 'react/no-unknown-property': [
    //   'error',
    //   {
    //     ignore: ['jsx', 'global'],
    //   },
    // ],
    'react/react-in-jsx-scope': 'off',

    /**
     *
     * React Hooks enforcement
     *
     */
    /** Checks rules of hooks. */
    'react-hooks/rules-of-hooks': 'error',
    /** Checks effect dependencies. */
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    'comma-dangle': 0,
  },
};
