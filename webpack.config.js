
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");

module.exports={
    entry:'./index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader'] },
            {test:/\.(jpg|gif|png)/,use:'url-loader'},
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}