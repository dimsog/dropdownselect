const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/js/vanilla-selectx.js', './src/scss/vanilla-selectx.scss'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'vanilla-selectx.js',
        library: 'VanillaSelectx',
        libraryExport: "default",
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'vanilla-selectx.css'
        })
    ]
};