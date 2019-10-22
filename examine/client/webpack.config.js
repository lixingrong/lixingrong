const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[hash].chunk.js'
    },
    devServer: {
        port: 7000,
        contentBase: './dist',
        proxy: {
            "/user": {
                target: 'http://localhost:9000',
                changeOrigin: true
            }
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {   // 处理 jsx 语法
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|gif|bmp|jpeg|png)$/g,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),  //清除 输出目录
        new HtmlWebpackPlugin({
            // 将 template 属性指定的 html 打包输出 到 dist 目录
            path: './dist',
            template: './src/index.html'
        })
    ]
};
