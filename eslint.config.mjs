import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'antfu/no-import-dist': 'off',
    'no-undef': 'off',
  },
})
