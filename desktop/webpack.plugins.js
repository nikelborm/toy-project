const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  ...[ 'static', 'asset-manifest.json', 'favicon.ico', 'fonts.css' ].map(
    asset => new CopyWebpackPlugin({patterns:[{
      from: path.resolve(__dirname, 'src', asset),
      to: path.resolve(__dirname, '.webpack/renderer', asset)
    }]})
  ),
  new CopyWebpackPlugin({patterns:[{
    from: path.resolve(__dirname, 'src', 'preload.js'),
    to: path.resolve(__dirname, '.webpack/main', 'preload.js')
  }]})
];
