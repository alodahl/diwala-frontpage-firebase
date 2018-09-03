const path = require('path');

module.exports = {
  entry: {
    polyfill: './src/polyfill.ts',
    'polyfill-loader': './src/polyfill-loader.ts'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].min.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "ts-loader"}
    ]
  }
};
