const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}

module.exports = {
  mode: 'production',
  context: path.resolve('.'),
  entry: './index.js',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'multi-matrix.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      auth: srcPath('auth'),
      core: srcPath('core'),
      models: srcPath('models'),
    },
  },
};
