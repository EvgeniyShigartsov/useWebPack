const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.join(__dirname, 'dist')
const BUILD_DIR_ASSETS = path.join(BUILD_DIR, 'assets')
const APP_DIR = path.join(__dirname, 'src')

console.log(BUILD_DIR_ASSETS)

const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom']

const config = {
  // mode: 'production',
  mode: 'development',
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: '[name].[contenthash].chunk.js',
    chunkFilename: '[name].[contenthash].chunkFile.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sass|css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          test: new RegExp(`[\\/]node_modules[\\/](${VENDOR_LIBS.join('|')})[\\/]`),
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}

module.exports = config
