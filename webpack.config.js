const path = require("path")

var config = {
    entry: ["./server.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }, module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    }
}

config.target = "node"

module.exports = config