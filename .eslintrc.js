module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
};
