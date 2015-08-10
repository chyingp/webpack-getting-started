var path = require('path');

var config = {
    entry: "./components/app/app.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'jsx'                   
            },
            {
                test: /components\/.+\.js?$/,
                loader: 'jsx'                   
            }
        ]
    },
    resolve: {
        root: [path.resolve('./components/'), path.resolve('./node_modules')]
        // modulesDirectories: ['components', 'node_modules']
    }
};

module.exports = config;