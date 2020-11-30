module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-empty': 0,
    'no-underscore-dangle': 0,
    'max-len': ['error', { code: 180 }],
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 3,
      maxEOF: 1,
    }],
    'vue/html-indent': [2, 2, {
      attribute: 0,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-closing-bracket-spacing': [2, {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
