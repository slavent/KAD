const path = require("path")
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
    }
})