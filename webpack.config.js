const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devtool: "source-map",
  optimization: {
    //minimizer: []
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  externals: [
    {
      react: 'require(\'react\')'
    },
    {
      "@wordpress/blocks": "require('@wordpress/blocks')"
    },
    {
      "@wordpress/editor": "require('@wordpress/editor')"
    },
    {
      "@wordpress/i18n": "require('@wordpress/i18n')"
    },
  ]
};
