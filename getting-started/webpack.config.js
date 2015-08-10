module.exports = {
    entry: ["./entry.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },            
            { test: /\.scss$/, loader: 'style!css!sass' },
            {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=25000'
            }
        ]
    }
};