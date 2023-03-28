const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Define your entry point
  output: {
    filename: 'bundle.js', // Define your output file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use the babel-loader to transpile JavaScript code
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Use the html-webpack-plugin to generate an HTML file
      template: './src/index.html',
    }),
  ],
  stats: {
    children: true,
  },
};
