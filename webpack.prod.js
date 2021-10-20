const {merge} = require('webpack-merge');
const common = require('./webpack.common');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "production",
    output: {
        publicPath: "/wp-content/themes/twentyseventeen/"
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ]
})