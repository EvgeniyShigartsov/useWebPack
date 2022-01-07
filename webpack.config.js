// module.exports = {
//   // mode: 'development',
//   mode: 'production',
//   entry: './src/app.js',
//   output: {
//     filename: './app.bundle.js',
//   }
// }

const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.join(__dirname, 'dist')
const APP_DIR = path.join(__dirname, 'src')

const config = {
  mode: 'production',
  entry: `${APP_DIR}/app.js`,
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js',
  },
}

module.exports = config