const path = require('path') // 处理绝对路径
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, '/src/main.js'), // 入口文件
    output: {
        path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
        filename: 'bundle.js', //打包后输出文件的文件名
        // publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: 'img/[name].[hash:8].[ext]'
                },

            }]
        }, {
            test: /\.js$/,
            //排除
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    resolve: {
        //别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归aaa所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ]

}