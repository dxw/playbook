const path = require('path')

module.exports = {
  entry: {
    search: path.join(__dirname, 'src/_webpack/search'),
    redirect: path.join(__dirname, 'src/_webpack/redirect'),
    plausible: path.join(__dirname, 'src/_webpack/plausible')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'src/assets/js')
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
