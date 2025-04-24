import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  rules: {
    'no-console': 'off',
    'antfu/no-import-dist': 'off',
    'no-undef': 'off',
    'ts/no-unused-expressions': 'off',
    'no-unused-expressions': 'off',
  },
})
