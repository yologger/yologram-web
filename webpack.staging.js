const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

require('dotenv').config({ path: './.env.staging' });

module.exports = {
  entry: './src/index.tsx',
  mode: 'production', // none, devlopment, production
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[id].[contenthash:8].js',
    chunkFilename: 'js/[id].[contenthash:8].chunk.js',
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new ESBuildMinifyPlugin({
        css: true,
        minify: true
      })
    ],
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpeg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            dependency: { not: ['url'] },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  svgo: true,
                  titleProp: true,
                  svgoConfig: {
                    plugins: [
                      {
                        name: 'removeViewBox',
                        active: false
                      }
                    ]
                  }
                }
              },
              'new-url-loader'
            ]
          },
          {
            type: 'asset',
            generator: {
              filename: 'pc-static/resource/[hash][ext][query]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.EnvironmentPlugin({
      ...process.env
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      ignoreOrder: false
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  performance: {
    maxAssetSize: 500000, // asset size limit = 500KB
    maxEntrypointSize: 1000000 // entrypoint size limit = 1MB
  }
};
