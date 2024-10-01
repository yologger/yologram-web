const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

require('dotenv').config({ path: './.env.production' });

module.exports = {
    mode: 'none',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        publicPath: "/",
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_module/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpeg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
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
                                active: false,
                              },
                            ],
                          },
                        },
                      },
                      'new-url-loader',
                    ],
                  },
                  {
                    type: 'asset',
                    generator: {
                      filename: 'static/resource/[hash][ext][query]',
                    },
                  },
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new webpack.EnvironmentPlugin({
            ...process.env,
        }),
    ],
    devServer: {
        port: 8888,
        historyApiFallback: true,
        client: {
            overlay: true,
            webSocketURL: "ws://0.0.0.0:8888/ws",
        },
    },
};