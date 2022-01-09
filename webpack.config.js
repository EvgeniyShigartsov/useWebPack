const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.join(__dirname, 'dist')
const APP_DIR = path.join(__dirname, 'src')

const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom']

const config = {
  // mode: 'production',
  mode: 'development',
  watch: true,
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: '[name].[contenthash].chunk.js',
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
      title: 'webpack',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   name: 'commons',
        //   chunks: 'initial',
        //   minChunks: 2,
        // },
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'vendors',
        //   chunks: 'all',
        // },
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
