const path = require("path")
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        proxy: {
            "/api": {
                target: "http://localhost:3333",
                pathRewrite: { '^/api': '' }
            },
            "/files": {
                target: "http://localhost:3333/v1"
            }
        },
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
} )