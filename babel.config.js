module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@resource': './src/resource',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
