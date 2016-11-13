const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.trim() || "development";

var
	webpack = require( "webpack" ),
	path = require( "path" ),
	pack = require( "./package.json" ),
	babelQuery = {
		presets: [ "es2015", "react" ],
		plugins: [ "transform-proto-to-assign", "transform-es3-property-literals", "transform-es3-member-expression-literals", "transform-object-rest-spread" ]
	};

var config = {
	entry: {
		"kad": path.resolve( __dirname, "src/index" )
	},
	output: {
		publicPath: "", // "wp-content/themes/twentysixteen/",
		path: path.resolve( __dirname, "dist" ),
		filename: "[name].js",
	},
	module: {
		loaders: [ {
			test: /\.html$/,
			loader: "file-loader?name=[name].[ext]"
		}, {
			test: /\.jsx|js(\?.+)?$/,
			exclude: [ /node_modules(?![\/\\]ufs-)/, /bundle.js/ ],
			loaders: [ /*"es3ify", */ `babel?${JSON.stringify(babelQuery)}` ]
		}, {
			test: /\.(scss|css)(\?.+)?$/,
			loader: "style-loader!css-loader!sass-loader?sourceMap"
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: "file-loader?name=images/[hash].[ext]"
		}, {
			test: /\.ttf(\?.+)?$/,
			loader: "file-loader?limit=8192&name=fonts/[hash].[ext]"
		}, {
			test: /\.woff(\?.+)?$/,
			loader: "file-loader?limit=8192&name=fonts/[hash].[ext]"
		}, {
			test: /\.eot(\?.+)?$/,
			loader: "file-loader?limit=8192&name=fonts/[hash].[ext]"
		} ]
	},
	plugins: [
		new webpack.ProvidePlugin( {
			$: "jquery",
			"window.$": "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "underscore",
			React: "react",
			ReactDOM: "react-dom",
			axios: "axios"
		} ),
		new webpack.DefinePlugin( {
			UI_VERSION: JSON.stringify( pack.version )
		} ),
		new webpack.EnvironmentPlugin( "NODE_ENV" ),
		new webpack.optimize.DedupePlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool: "source-map",
	resolve: {
		root: path.resolve( __dirname, "src" ),
		extensions: [ "", ".js", ".jsx" ],
		alias: {
			components: path.resolve( "./src/components/" ),
			process: path.resolve( "./src/process/" ),
			screens: path.resolve( "./src/screens/" ),
			actions: path.resolve( "./src/actions/" ),
			reducers: path.resolve( "./src/reducers/" ),
			stores: path.resolve( "./src/stores/" ),
			data: path.resolve( "./src/data/" ),
			node_modules: path.resolve( "./node_modules/" ),
		},
		fallback: path.join( __dirname, "node_modules" )
	},
	resolveLoader: {
		fallback: path.join( __dirname, "node_modules" )
	},
	sassLoader: {
		outputStyle: "compressed"
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
};

if ( NODE_ENV !== "development" ) {
	config.plugins.push( new webpack.optimize.UglifyJsPlugin( {
		sourceMap: true,
		beautify: false,
		comments: false,
		compress: {
			warnings: false,
			sequences: true,
			booleans: true,
			loops: true,
			unused: true,
			drop_console: true,
			unsafe: true
		}
	} ) );
}

module.exports = config