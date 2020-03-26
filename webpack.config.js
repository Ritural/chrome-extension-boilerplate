const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const VERSION = JSON.stringify(require('./package.json').version);

module.exports = {
  entry: {
    options: './src/components/options.tsx',
    popup: './src/components/popup.tsx',
    background: './src/components/background.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      app: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
    },
    extensions: [".ts", ".tsx", ".js", ".html"],
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
      // Handle html files
      {
        exclude: /node_modules/,
        test: /\.(html)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
      },
      // Handle json files
      {
        type: 'javascript/auto',
        exclude: /node_modules/,
        test: /\.(json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ],
      },
      // Handle images
      {
        exclude: /node_modules/,
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
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