module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg', '.png', '.jpg', '.jpeg'],
          alias: {
            '@api': './api',
            '@models': './models',
            '@screens': ['./screens'],
            '@components': ['./components'],
            '@store': ['./store'],
            '@navigation': './navigation',
            '@constants': './constants',
          },
        }
      ],
    ],
  };
};
