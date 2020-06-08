module.exports = {
  entry: './_javascripts/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}
