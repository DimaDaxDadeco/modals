const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  }
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    camelCase: true,
    modules: true,
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[local]___[hash:base64:5]'
  }
};

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({ title: 'NDB' })
];

const stylesLoaders = (modules) => [
  'style-loader',
  modules ? cssLoader : 'css-loader',
  postCssLoader,
  'less-loader'
];

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.js$/,
      include: [/src/],
      exclude: [/node_modules/],
      loader: 'babel-loader'
    },
    {
      test: /\.(ts|tsx)$/,
      loader: "ts-loader",
      include: [/src/],
      exclude: [/node_modules/]
    },
    {
      test: /\.(css|less)$/,
      use: stylesLoaders(true),
      exclude: [/node_modules/],
    },
    {
      test: /\.(css|less)$/,
      use: stylesLoaders(false),
      include: [/node_modules/],
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'scripts/'),
    publicPath: '/scripts/',
    filename: isProduction ? '[name].[hash].js' : 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: path.join(__dirname, 'public/'),
    hotOnly: true,
    historyApiFallback: true
  },
  plugins,
  devtool: isProduction ? undefined : 'source-map',
  performance: { hints: false }
};
