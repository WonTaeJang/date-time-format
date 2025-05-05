import eslintPluginVue from 'eslint-plugin-vue'
import eslintPlugin from '@eslint/js'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default [
  eslintPlugin.configs.recommended,
  ...eslintPluginVue.configs['flat/essential'],
  ...eslintPluginVue.configs['flat/strongly-recommended'],
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      parser: vueParser,
    },
    rules: {
      'keyword-spacing': 1,
      'space-before-function-paren': 1,
      'comma-spacing': 1,
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Index', 'Icon', 'Loading', 'Logout', 'Tooltip'],
        },
      ],
    },
  },
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'keyword-spacing': 1,
      'space-before-function-paren': 1,
      'comma-spacing': 1,
    },
  },
]
