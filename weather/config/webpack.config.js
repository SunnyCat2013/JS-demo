const path = require('path')

const webpack = require('webpack')

const SRC = path.join(__dirname, '../src')
const TARGET = process.env.npm_lifecycle_event

module.exports = {
  entry: [
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
        use: ['css-loader']
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
