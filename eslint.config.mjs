import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Per-file globs + rules (applies after Nuxt generated configs)
  {
    // only apply this config to TypeScript files
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      // your original choices
      '@typescript-eslint/comma-dangle': 'off',
      'n/prefer-global/process': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'space-before-function-paren': 'off',
      'comma-dangle': 'off',
      'operator-linebreak': 'off',
      'curly': 'off',
      'brace-style': 'off',
    }
  }
)
