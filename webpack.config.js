const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim() || "development"
const webpack = require( "webpack" )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )

const path = require( "path" )

const config = {
    entry: path.resolve( __dirname, "src/index" ),
    output: {
        publicPath: "wp-content/themes/twentyseventeen/",
        path: path.resolve( __dirname, "dist" ),
        filename: "kad.js"
    },
    module: {
        rules: [ {
            test: /\.html$/,
            use: "file-loader?name=[name].[ext]"
        }, {
            test: /\.jsx|js(\?.+)?$/,
            exclude: [ /node_modules/ ],
            use: {
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-env", "@babel/preset-react" ]
                }
            }
        }, {
            test: /\.(scss|css)(\?.+)?$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader"
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {}
                }
            ]
        } ]
    },
    plugins: [
        new CopyWebpackPlugin( [
            {
                from: "./index.html",
                to: "./"
            },
            {
                from: "./favicon.ico",
                to: "./"
            },
            {
                from: "./src/ring.mp3",
                to: "./"
            }
        ] )
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ],
        alias: {
            components: path.resolve( "./src/components/" ),
            process: path.resolve( "./src/process/" ),
            screens: path.resolve( "./src/screens/" ),
            utils: path.resolve( "./src/utils/" )
        }
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        progress: true,
        contentBase: __dirname + "/dist/",
        stats: {
            colors: true
        },
        headers: {
            "Cache-Control": "no-cache"
        }
    }
}

if ( NODE_ENV === "development" ) {
    config.devtool = "eval"
} else if ( NODE_ENV === "production" ) {
    config.devtool = "source-map"
    config.plugins.push(
        new webpack.DefinePlugin( {
            NODE_ENV: JSON.stringify( "production" )
        } )
    )
}

module.exports = config
