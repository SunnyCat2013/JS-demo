const path = require('path')

const webpack = require('webpack')

const SRC = path.join(__dirname, '../src')
const TARGET = process.env.npm_lifecycle_event

module.exports = {
  entry: path.join(SRC, 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          SRC,
          'node_modules'
        ]
      },
      loader: 'babel-loader'
    ]
  }
}
