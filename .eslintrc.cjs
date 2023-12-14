module.exports = {
  overrides: [
    // Configuration for `.astro` file.
    {
      files: ['*.astro'],
      plugins: ['astro'],
      parser: 'astro-eslint-parser',

      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module'
      },

      env: {
        'astro/astro': true,
        es2020: true,
        node: true
      },

      rules: {
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-css-selector': 'error',
        'astro/no-set-html-directive': 'error'
      }
    },

    // Configuration for the `<script>` tag.
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],

      parserOptions: {
        sourceType: 'module'
      },

      env: {
        browser: true,
        es2020: true
      },

      rules: {
        'prettier/prettier': 'off'
      }
    }
  ]
};
