const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim() || "development"

var
    webpack = require( "webpack" ),
    path = require( "path" ),
    pack = require( "./package.json" ),
    babelQuery = {
        presets: [ "es2015", "react" ],
        plugins: [ "transform-proto-to-assign", "transform-es3-property-literals", "transform-es3-member-expression-literals" ]
    }

var config = {
    entry: path.resolve( __dirname, "src/index" ),
    output: {
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
        new webpack.ProvidePlugin( {
            _: "underscore",
            React: "react",
            ReactDOM: "react-dom",
            axios: "axios"
        } ),
        new webpack.DefinePlugin( {
            UI_VERSION: JSON.stringify( pack.version )
        } ),
        new webpack.EnvironmentPlugin( "NODE_ENV" )
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ],
        alias: {
            components: path.resolve( "./src/components/" ),
            process: path.resolve( "./src/process/" ),
            screens: path.resolve( "./src/screens/" ),
            actions: path.resolve( "./src/actions/" ),
            reducers: path.resolve( "./src/reducers/" ),
            stores: path.resolve( "./src/stores/" ),
            data: path.resolve( "./src/data/" ),
            utils: path.resolve( "./src/utils" )
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

module.exports = config
