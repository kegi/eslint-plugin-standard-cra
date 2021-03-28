/**
 * @fileoverview StandardJS for CRA + TS
 * @author Kevin Gilbert
 */
 'use strict'

 const cratsBase = {
   plugins: [
     'react',
     'react-hooks',
   ],
   parserOptions: {
     project: './tsconfig.json',
   },
   extends: [
     'plugin:react/recommended',
     'standard-with-typescript',
   ],
   settings: {
     react: {
       version: 'detect',
     },
   },
 }
 
 module.exports = {
   configs: {
     base: cratsBase,
     recommended: {
       ...cratsBase,
       rules: {
         'comma-dangle': ['warn', 'always-multiline'],

         'jsx-quotes': ['warn', 'prefer-double'],

         'react/forbid-component-props': ['warn', { forbid: ['style'] }],
         'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
         'react/no-array-index-key': 'error',
         'react/no-danger': 'error',
         'react/prop-types': 'off', // not needed with typescript
         'react/react-in-jsx-scope': 'off', // not needed with react 17
         'react/self-closing-comp': ['warn', { component: true, html: true }],
         'react/void-dom-elements-no-children': 'error',

         'react/jsx-boolean-value': ['warn', 'never'],
         'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
         'react/jsx-closing-tag-location': 'warn',
         'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
         'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
         'react/jsx-curly-spacing': ['warn', { when: 'never', children: { when: 'always' } }],
         'react/jsx-equals-spacing': ['warn', 'never'],
         'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
         'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
         'react/jsx-fragments': ['error', 'syntax'],
         'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
         'react/jsx-indent-props': ['warn', 2],
         'react/jsx-max-props-per-line': ['warn', { maximum: 2, when: 'always' }],
         'react/jsx-no-script-url': 'error',
         'react/jsx-no-useless-fragment': 'warn',
         'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
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

         '@typescript-eslint/default-param-last': 'off',
         '@typescript-eslint/explicit-function-return-type': 'off',
         '@typescript-eslint/strict-boolean-expressions': 'off',
       },
     },
   },
 }
 