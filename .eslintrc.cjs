module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:astro/recomended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
}
