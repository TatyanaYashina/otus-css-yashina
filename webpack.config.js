const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports  = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'styles.css',
        // }),
       ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader',
            // 'sass-loader' 
            {
                loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                "autoprefixer",
                                "postcss-preset-env",
                                "cssnano"
                            ],
                        },
                    },
                },
               
        ],
    },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name]-[hash][ext]',
                }    
            },
        ],
        // devServer: {
        //     compress: false,
        //     open: true,
        //     port: 3000,
        //     hot: true,
        //    }
    }
  }