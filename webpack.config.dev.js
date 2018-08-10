const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { name } = require('./package.json')

module.exports = {
  cache: true,
  mode: 'development',
  entry: ['./src/index'],
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.[hash].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  plugins: [
    new Dotenv({ path: './.env' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: name,
      template: path.join(__dirname, 'templates', 'template.ejs')
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
}
