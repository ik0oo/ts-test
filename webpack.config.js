// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const config = {

    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        publicPath: "/dist/",
        path: path.resolve("./dist")
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};

module.exports = config;