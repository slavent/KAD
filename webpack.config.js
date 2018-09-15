// const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim() || "development"

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
    devtool: "source-map",
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

module.exports = config
