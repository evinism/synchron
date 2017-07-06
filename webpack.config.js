let context = process.env.APP ? '/testApp/' : '/src/client';

module.exports = {
  context: __dirname + context,
  entry: [
    'babel-polyfill',
    './index',
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map'
}
