const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const VERSION = JSON.stringify(require('./package.json').version);

module.exports = {
  entry: {
    options: './src/app/options.tsx',
    popup: './src/app/popup.tsx',
    background: './src/app/background.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      // Handle tsx & ts files
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      // Handle scss
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader', // 4. translates CSS into CommonJS
            options: {
              sourceMap: true,
              importLoaders: true,
            },
          },
          {
            loader: 'postcss-loader', // 3. Adds CSS prefixes
            options: {
              sourceMap: true,
            },
          },
          // 2. Resolve URL loader can go here if needed
          {
            loader: 'sass-loader', // 1. Compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      VERSION,
      IS_DEV: !isProduction,
    }),
  ]
}