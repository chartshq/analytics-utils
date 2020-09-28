const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'umd.js',
    libraryTarget: 'umd',
    library: 'AnalyticsUtils',
    umdNamedDefine: true,
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
  },
  externals: {
    'posthog-js': {
      commonjs: 'posthog-js',
      commonjs2: 'posthog-js',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
