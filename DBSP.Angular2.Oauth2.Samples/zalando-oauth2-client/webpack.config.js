//var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

//module.exports = {
//  entry: './src/main.ts',
//  output: {
//    path: './dist',
//    filename: 'app.bundle.js'
//  },
//  module: {
//    loaders: [
//      {test: /\.ts$/, loader: 'ts'},
//      {test: /\.html$/, loader: 'raw'},
//      {test: /\.css$/, loader: 'raw'}
//    ]
//  },
//  resolve: {
//    extensions: ['', '.js', '.ts', '.html', '.css']
//  },
//  plugins: [
//    new HtmlWebpackPlugin({
//      template: './src/index.html'
//    }),
//    new webpack.DefinePlugin({
//      app: {
//        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
//      }
//    })
//  ] 
//};
var webpack = require('webpack');
var path = require("path");

module.exports = {
  debug: true,
  devtool: 'source-map',
  context: path.resolve("src"),
  entry: {
    fullMain: "./main.ts"
  },
  output: {
    path: path.resolve("build/js"),
    publicPath: "/dist/assets/js",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.jpg', '.jpeg', '.gif', '.png', '.css']
  },
  module: {
    loaders: [
        { test: /\.(jpg|jpeg|gif|png)$/, loader: 'file-loader?name=img/[path][name].[ext]' },
        { test: /\.css$/, loader: 'raw-loader' },
        { test: /\.html$/, loaders: ['html-loader'] },
        { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }
    ]
  },
  modulesDirectories: ['node_modules'],
  node: {
    __filename: true
  },
  devServer: {
    contentBase: "dist",
    inline: true,
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
