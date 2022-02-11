const Dotenv = require("dotenv-webpack")

const path = require("path")

module.exports = {
    entry: "./src/*",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-first-webpack.bundle.js",
    },
    plugins: [new Dotenv()],
}
