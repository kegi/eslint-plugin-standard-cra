/**
 * @fileoverview StandardJS for CRA + TS
 * @author Kevin Gilbert
 */

 const base = {
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}

const jsBase = {
  ...base,
  extends: [
    ...base.extends,
    'standard',
  ],
}

const tsBase = {
  ...base,
  extends: [
    ...base.extends,
    'standard-with-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}

const baseRules = {
  'comma-dangle': ['warn', 'always-multiline'],

  'jsx-quotes': ['warn', 'prefer-double'],

  'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
  'react/no-array-index-key': 'error',
  'react/no-danger': 'error',
  'react/react-in-jsx-scope': 'off', // not needed with react 17
  'react/self-closing-comp': ['warn', { component: true, html: true }],
  'react/void-dom-elements-no-children': 'error',
  'react/no-unescaped-entities': 'off',

  'react/jsx-boolean-value': ['warn', 'never'],
  'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
  'react/jsx-closing-tag-location': 'warn',
  'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
  'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
  'react/jsx-curly-spacing': ['warn', { when: 'never', children: { when: 'always' } }],
  'react/jsx-equals-spacing': ['warn', 'never'],
  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': ['warn', 2],
  'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': 'warn',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-multi-spaces': 'warn',
  'react/jsx-tag-spacing': ['warn', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  'react/jsx-wrap-multilines': ['warn', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  }],
}

const tsRules = {
  ...baseRules,
  'react/prop-types': 'off',

  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
}

module.exports = {
  configs: {
    base: tsBase,
    recommended: {
      ...tsBase,
      rules: tsRules,
    },
    'js-base': jsBase,
    'js-recommended': {
      ...jsBase,
      rules: baseRules,
    },
  },
}
