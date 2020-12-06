module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
  rules: {
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
}
