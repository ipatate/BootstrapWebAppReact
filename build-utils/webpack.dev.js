module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
