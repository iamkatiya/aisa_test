module.exports = {
  ignorePatterns: ['node_modules/**', 'src/assets/**', 'public/**', 'dist/**'],
  root: true,
  env: {
    browser: true,
    node: true,
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-debugger': 'off',
    eqeqeq: 'off',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'import/no-unresolved': 'off',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
