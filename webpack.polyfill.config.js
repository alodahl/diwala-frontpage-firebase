const path = require('path');

module.exports = {
  entry: './src/polyfill.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/polyfill.min.js'
  }
};