const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"../dist"),
        // 入口文件打包输出文件名
        filename: "static/js/main.js",
        clean: true //在打包前清空之前打包的文件，全部生成新的文件
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader", //将css样式引入html文件中
                    "css-loader" //编译css文件
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10 kb的图片进行base64转换，不需要发送请求获取资源
                    }
                },
                generator: {
                    //[hash:10]表示只去hash值前10位做文件名
                    filename: 'static/img/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        // 以 public/index.html 为模板创建文件
        // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        })
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    mode: "development"
}