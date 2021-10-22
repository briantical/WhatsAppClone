module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@store',
            rootPathSuffix: 'src/store',
          },
          {
            rootPathPrefix: '@screens',
            rootPathSuffix: 'src/screens',
          },
          {
            rootPathPrefix: '@styles',
            rootPathSuffix: 'src/styles',
          },
          {
            rootPathPrefix: '@commons',
            rootPathSuffix: 'src/commons',
          },
          {
            rootPathPrefix: '@components',
            rootPathSuffix: 'src/components',
          },
        ],
      },
    ],
  ],
};
