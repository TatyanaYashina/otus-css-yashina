const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  target: 'web',
  entry: path.resolve(__dirname, './src/index.js'),
  output:{
    path: path.resolve(__dirname, 'public'),
    clean: true,
    filename: "[contenthash].js",
    assetModuleFilename: 'assets/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module:{
    rules:[
        {
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader",
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
            test: /\.html$/,
            use: 'html-loader'
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|jpg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name]-[hash][ext]',
            }
        }         
    ]
  },
  devServer: {
    compress: false,
    open: true,
    hot: true,
  },
};