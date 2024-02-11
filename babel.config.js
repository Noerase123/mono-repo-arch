module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src',
        }
      }
    ],
  ],
};