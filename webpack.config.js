const path = require('path');

module.exports = {
  // Данная строка делает мой путь абсолютным, не нужно каждый раз указывать папку 'src'
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  }
};