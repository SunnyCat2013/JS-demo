const path = require('path')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const SRC = path.join(__dirname, '../src')

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(SRC, 'app'),
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/static'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SRC,
          'node_modules'
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.png$/,
        use: [ 'url-loader?mimetype=image/png' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      SRC,
      'node_modules'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
}
