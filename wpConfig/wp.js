var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public", "assets");
var publicPath = "assets/";

var WEBPACK_HOST = "localhost";
var WEBPACK_PORT = 3000;

var commonLoaders = [
    {   test: /\.rt/,
        loader: "react-templates"
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    },
    {
        test: /\.js$|\.jsx$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, "..", "client")
    },
    { test: /\.png$/, loader: "url-loader" },
    { test: /\.jpg$/, loader: "file-loader" },
    { test: /\.html$/, loader: "html-loader" }
];

module.exports = [
    {
        name: "browser",
        context: path.join(__dirname, "..", "client"),
        entry: {
            /*app:['webpack-dev-server/client?http://' + WEBPACK_HOST + ":" + WEBPACK_PORT,
                'webpack/hot/only-dev-server',
                "./client" ]*/
            app: "./client"
        },
        output: {
            path: assetsPath,
            filename: "[name].js",
            publicPath: publicPath
        },
        devtool: 'inline-source-map',
        module: {
            /* preLoaders: [{
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loaders: ["eslint"]
            }],*/
            loaders: commonLoaders
        },
        resolve: {
            extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
            modulesDirectories: [
                "client", "node_modules"
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    },
    {
        // The configuration for the server-side rendering
        name: "server-side rendering",
        context: path.join(__dirname, "..", "client"),
        entry: {
            app: "./server"
        },
        target: "node",
        devtool: 'inline-source-map',
        output: {
            path: assetsPath,
            filename: "[name].server.js",
            publicPath: publicPath,
            libraryTarget: "commonjs2"
        },
        externals: /^[a-z\-0-9]+$/,
        module: {
            loaders: commonLoaders
        },
        resolve: {
            extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
            modulesDirectories: [
                "client", "node_modules"
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css'),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    }
];
